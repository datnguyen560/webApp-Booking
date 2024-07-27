const mongoose = require('mongoose');
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
    photo: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
    }
}, {timestamps: true});

module.exports = mongoose.model('Users', User);