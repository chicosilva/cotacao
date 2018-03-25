const mongoose = require('mongoose');
const Budget = mongoose.model('Budget');
const User = mongoose.model('User');
const keys = require('../../configs/keys');
const jwt = require('jsonwebtoken');
const { checkApiToken, validadeApiToken } = require("./validadesTokens");
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

module.exports = app => {

    app.get('/budgets', async (req, res) => {

        const decoded = checkApiToken(req.query.token);

        if (!decoded) {
            return res.status(422).json({
                message: "Error Token",
            });
        }

        await Budget.find({
            user: decoded.user_id
        }).sort('-_id').select('title created_at date_limit').exec(

            (e, budgets) => {

                if (e) {
                    res.status(422).json({
                        message: "Error"
                    });
                }

                res.status(200).json({
                    message: "success",
                    budgets: budgets
                });

            });
    })

    app.post('/budgets/new/', [
            check('token', 'Token é obrigatório').exists()
            .custom(value => {

                return validadeApiToken(value).then((err, token) => {
                    return true;
                }).catch(err => {

                    throw new Error('token inválido!');
                });
            }),
            check('title', 'Título é obrigatório').exists(),
            check('description', 'Descrição é obrigatório').exists(),
        ],

        (req, res, next) => {
            
            const errors = validationResult(req);
            
            if (!errors.isEmpty()) {
                
                return res.status(422).json({
                    errors: errors.mapped()
                });
            }
            const data = req.body;

            const decoded = checkApiToken(data.token);
            
            const budget = new Budget({
                title: data.title,
                description: data.description,
                date_limit: data.date_limit,
                user: decoded.user_id,
            });

            budget.save((err, result) => {

                if (err) {
                    return res.status(422).json({
                        message: err
                    });
                }
                res.status(200).json({
                    message: "success",
                    title: result.title,
                    id: result._id
                });
            });

        });

}