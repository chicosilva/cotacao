const mongoose =  require('mongoose');
const {Schema} = mongoose;

const BudgetSchema = new Schema({

    description: {
        type: String, 
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    date_limit: {
        type: Date,
        required: true
    }

});

mongoose.model('budget', BudgetSchema);