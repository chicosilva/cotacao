const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({

    name: {
        type: String,
        required: true
    }

});

mongoose.model('Product', ProductSchema);