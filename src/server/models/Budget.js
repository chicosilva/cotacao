const mongoose =  require('mongoose');
const {Schema} = mongoose;

const BudgetSchema = new Schema({
    description: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('budget', BudgetSchema);