const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: [{
        type: String
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
