const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    phone_number: { type: String, required: true },
    password: { type: String, required: true },
    // Other fields...
});

module.exports = mongoose.model('User', userSchema);