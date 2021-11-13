const {Schema, model } = require('mongoose');

const Round = new Schema({
    scores: [Number],
    dateAdded: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Round;