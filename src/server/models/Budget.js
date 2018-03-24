const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const {Schema} = mongoose;

const BudgetSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date_limit: {
        type: Date,
        required: false
    },
    is_send: {
        type: Boolean,
        default: false
    },
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]

});

mongoose.model('Budget', BudgetSchema);