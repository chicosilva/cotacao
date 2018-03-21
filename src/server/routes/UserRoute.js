const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('../../configs/keys');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

function emailExists(email){
    
    return new Promise((resolve, reject) => {
        
        User.
            find({ email: email }).
            select('email').
            exec(function(err, user){
                
                if(user.length > 0){
                    reject(user);
                }else{
                    return resolve(null);
                }
                
        });
    });

}

module.exports = app => {

    app.post('/user/login', async (req, res) => {

        const user = await User.findOne({
            email: req.body.email
        });

        const token = jwt.sign({
            user_id: user._id
        }, keys.secret);

        res.status(200).json({
            token: token
        });

    });

    app.post('/user/new', [
        
        check('email')
        .isEmail().withMessage('e-mail inválido')
        .trim()
        .normalizeEmail()
        .custom(value => {
            
            return emailExists(value).then((err, user) =>{
                return true;
            }).catch(err => {
                throw new Error('e-mail já cadastrado!'); 
            });
        }),

        check('password', 'A senha deve ter no mínimo 5 letras')
        .isLength({
            min: 5
        }),
        check('first_name', 'Nome é obrigatório').exists(),
        check('last_name', 'Sobrenome é obrigatório').exists(),
        
    ], (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.mapped()
            });
        }

        const data_user = matchedData(req);
        
        const user = new User({
            first_name: data_user.first_name,
            last_name: data_user.last_name,
            email: data_user.email,
            password: data_user.password,
        });

        user.save((err, result) => {

            if (err) {
                return res.status(500).json({
                    message: err
                });
            }

            const token = jwt.sign({ user_id: user._id}, keys.secret);

            res.status(200).json({message: "success",token: token});
            
        });

    });

}