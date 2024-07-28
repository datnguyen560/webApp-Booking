const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

const User = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    // photo: {
    //     type: String,
    // },
    password: {
        type: String,
        required: true,
    },
    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // },
    phone: {
        type: String,
    }
}, {timestamps: true});
User.plugin(AutoIncrement, { inc_field: 'id' });
module.exports = mongoose.model('Users', User);