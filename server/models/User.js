const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const round = require('./Round');

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'You need to provide a Username.'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'You need to provide a Password.'],
        minlength: [8, 'Password must be at least 8 characters'],
    },
    handicap: {
        type: Number,
    },

    rounds: [round],
    
    bestScore: {
        type: Number,
    },
});

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;