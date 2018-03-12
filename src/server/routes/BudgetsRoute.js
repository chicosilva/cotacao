const mongoose = require('mongoose');
const Budget = mongoose.model('Budget');
const User = mongoose.model('User');
const keys = require('../../configs/keys');
const jwt = require('jsonwebtoken');
const checkToken = require('./checkToken');

module.exports = app => {
    
    app.get('/budgets', async (req, res) => {

        const decoded = checkToken(req.query.token);

        if(!decoded){
            return res.status(500).json({
                message: "Error Token"
            });
        }
        
        await Budget.find({user: decoded.user_id}).select('description created_at date_limit').exec(

            (e, budgets) => {

                if (e) {
                    res.status(500).json({
                        "message": "Error"
                    });
                }

                res.status(200).json({
                    message: "success",
                    budgets: budgets
                });

            });

    });

    app.post('/budgets/new', (req, res) => {

        const data = req.body;

        const budget = new Budget({
            description: data.description,
            date_limit: data.date_limit,
            user: data.user_id
        });

        budget.save((err, result) => {

            if (err) {
                return res.status(500).json({
                    message: err
                });
            }
            res.status(200).json({
                message: "success",
                description: result.description
            });
        });
    });

}