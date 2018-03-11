const mongoose =  require('mongoose');
const {Schema} = mongoose;

const BudgetSchema = new Schema({
    
    user: {type: Schema.Types.ObjectId, ref: "user", required: true},
    
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
    },
    is_send: {
        type: Boolean, 
        default: false
    }

});

mongoose.model('Budget', BudgetSchema);