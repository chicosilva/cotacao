const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('../../configs/keys');
const jwt = require('jsonwebtoken');

module.exports = app => {

    app.post('/user/login', async (req, res) => {

        const user = await User.findOne({ email: req.body.email });
        
        const token = jwt.sign({ user_id: user._id }, keys.secret);
        
        res.status(200).json({
            token: token
        });

    });

    app.post('/user/new', (req, res) => {

        const data = req.body;

        const user = new User({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
        });

        user.save((err, result) => {

            if (err) {
                return res.status(500).json({
                    message: err
                });
            }
            
            const token = jwt.sign({ user_id: user._id }, keys.secret);

            res.status(200).json({
                message: "success",
                first_name: result.first_name,
                id: result.id,
                token: token,
            });
        });
    });

}