const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const keys = require('../../configs/keys');
const jwt = require('jsonwebtoken');
const { checkApiToken, validadeApiToken } = require("./validadesTokens");
const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

module.exports = app => {

    app.get('/products', async (req, res) => {

        const decoded = checkApiToken(req.query.token);

        if (!decoded) {
            return res.status(422).json({
                message: "Error Token"
            });
        }

        await Product.find({}).sort('name').select('name created_at').exec(

            (e, list) => {

                if (e) {
                    res.status(422).json({
                        "message": "Error"
                    });
                }

                res.status(200).json({
                    message: "success",
                    list: list
                });

            });
    })

    app.post('/products/new/', [
            check('token', 'Token é obrigatório').exists()
            .custom(value => {

                return validadeApiToken(value).then((err, token) => {
                    return true;
                }).catch(err => {

                    throw new Error('token inválido!');
                });
            }),
            check('name', 'Título é obrigatório').exists(),
        ],

        (req, res, next) => {

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.mapped()
                });
            }
            const data = req.body;

            const product = new Product({
                name: data.name,
            });

            product.save((err, result) => {

                if (err) {
                    return res.status(422).json({
                        message: err
                    });
                }
                res.status(200).json({
                    message: "success",
                    name: result.name,
                    id: result._id
                });
            });

        });

}