const {Schema, model } = require('mongoose');

const Round = new Schema({
    scores: [Number],
    dateAdded: {
        type: Date,
        default: Date.now,
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
    },
});

module.exports = Round;