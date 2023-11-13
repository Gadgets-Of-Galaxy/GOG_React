const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: Number,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    dob: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    wishlists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Wishlist'
    }]
},
    {
        timestamps: true
    })

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function (candidatePassword) {
    if (this.password != null) {
        return bcrypt.compareSync(candidatePassword, this.password);
    } else {
        return false;
    }
};

module.exports = mongoose.model("User", userSchema);

