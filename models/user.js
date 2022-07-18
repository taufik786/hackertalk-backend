const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    otp: { type: String, default: '' },
    verified: { type: Boolean, default: false},
    createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('users', userSchema);