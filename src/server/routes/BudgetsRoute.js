const mongoose = require('mongoose');

const Budget = mongoose.model('budget');

module.exports = app => {

    app.get('/budgets', (req, res) => {

        Budget.find({}).select('description').exec(
            function (e, budgets) {

                if (e) {
                    res.status(500).json({ "message": "Error" });
                }

                res.status(200).json({ "message": "success", "budgets": budgets });

            });

    })

}