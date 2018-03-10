const mongoose =  require('mongoose');
const {Schema} = mongoose;

const BudgetSchema = new Schema({
    description: {type: String, required: true},
    created_at: {
        type: Date,
        default: Date.now
    }
})

mongoose.model('budget', BudgetSchema);