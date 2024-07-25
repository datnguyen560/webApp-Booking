const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hotels = new Schema ({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
    photo: {
        type: [String],
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0, 
        max: 5,
    },
    room: {
        type: String,
    },
    cheapestPrice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true})


module.exports = mongoose.model('Hotels', Hotels);