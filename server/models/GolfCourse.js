const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const courseSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    slope: {
        type: Number,
        required: true,
    },
    pars: [Number],
});