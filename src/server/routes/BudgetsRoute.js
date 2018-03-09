const mongoose = require('mongoose');
const Budget = mongoose.model('budget');

module.exports = app => {

    app.get('/budgets',  async (req, res) => {
        
        await Budget.find({}).select('description created_at').exec(
            
            function (e, budgets){
                
                if (e) {
                     res.status(500).json({ "message": "Error" });
                }
                
                res.status(200).json(
                    { 
                        message: "success",
                        budgets: budgets,
                        
                    }
                );

            });

    });

}