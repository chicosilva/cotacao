const mongoose = require('mongoose');
const User = mongoose.model('User');
const keys = require('../../configs/keys');
const jwt = require('jsonwebtoken');

module.exports = app => {

    app.post('/user/login', async (req, res) => {

        const user = await User.findOne({email: req.body.email })
        
        const token = jwt.sign({ user_id: user._id }, keys.secret);
        
        res.status(200).json({
            token: token
        });

    });
}