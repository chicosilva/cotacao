const mongoose =  require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({

    first_name: {
        type: String, 
        required: true
    },
    last_name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('user', UserSchema);