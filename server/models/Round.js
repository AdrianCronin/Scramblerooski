const {Schema, model } = require('mongoose');

const Round = new Schema({
    scores: [Number],
});

module.exports = Round;