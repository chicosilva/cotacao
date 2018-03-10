const mongoose = require('mongoose');
const Budget = mongoose.model('budget');

module.exports = app => {

    app.get('/budgets',  async (req, res) => {
        
        await Budget.find({}).select('description created_at date_limit').exec(
            
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
    
    app.post('/budgets/new', (req, res) => {
        
        const data = req.body

        const budget = new Budget({
            description: data.description,
            date_limit: data.date_limit
        })

        budget.save(function(err, result){
            
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