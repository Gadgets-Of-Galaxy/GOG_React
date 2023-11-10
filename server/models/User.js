const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    wishlists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wishlist'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
