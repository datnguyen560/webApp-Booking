const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Rooms = new Schema ({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // roomNumber: {
    //     type: [{number: Number, unavailableDates: [{type: [Date]}] }],
    //     required: true,
    // },
}, {timestamps: true})
    

module.exports = mongoose.model('Rooms', Rooms);