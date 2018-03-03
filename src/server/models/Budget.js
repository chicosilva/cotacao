const mongoose =  require('mongoose');
const {Schema} = mongoose;

const BudgetSchema = new Schema({
    description: String
})

mongoose.model('budget', BudgetSchema);