const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = app => {

    objUser = null;

    app.post('/user/session-test', async (req, res) => {
        
        req.session.user_id = req.body.user_id;
        res.status(200).json({ user_id: req.session.user_id});

    });
    

}