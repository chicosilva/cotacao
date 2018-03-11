const mongoose = require('mongoose');
const Budget = mongoose.model('budget');
const User = mongoose.model('user');

module.exports = app => {

    objUser = null;

    app.get('/budgets',  async (req, res) => {
        
        await Budget.find({}).select('description created_at date_limit').exec(
            
            (e, budgets) => {
                
                if (e) {
                     res.status(500).json({ "message": "Error" });
                }
                
                res.status(200).json({ message: "success", budgets: budgets});

        });

    });
    

    app.post('/budgets/new', (req, res) => {
        
        const data = req.body;
        
        console.log(req.session);

        const budget = new Budget({
            description: data.description,
            date_limit: data.date_limit,
            user: req.session.user_id
        });

        budget.save((err, result) => {
            
            if(err){
                return res.status(500).json({message: err});
            }
            
            res.status(200).json(
                    { 
                        message: "success",
                        description: result.description
                    }
            );
        });
    });

}