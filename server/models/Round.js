const {Schema, model } = require('mongoose');

const round = new Schema({
    scores: [Number],
});

module.exports = round;