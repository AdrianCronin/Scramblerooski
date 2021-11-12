const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
        minlength: [6, 'Password must be at least 6 characters'],
    },
    handicap: {
        type: Number,
    },
    rounds: [{
        type: Schema.Types.ObjectId,
        ref: 'Round',
    }],
    bestScore: {
        type: Number,
    },
    admin: {
        type: Boolean,
        default: false
    }
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