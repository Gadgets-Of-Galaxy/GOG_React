const express = require('express');
const User = require('../models/User');
const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product');

const router = express();

const bcrypt = require('bcrypt');

router.post('/api/register', async (req, res) => {
    console.log("req.body", req.body);
    const { name, email, password, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashedPassword = user.encryptPassword(password);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const passwordMatch = bcrypt.compareSync(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        req.session.user = user;

        res.status(200).json({ message: 'Login successful', user });
        console.log("login success");
        // res.redirect('/');
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        // console.log(products);
        // const bestSellingProducts = await Product.find({}).sort('-sold').limit(10);
        res.json({ products });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Products' });
    }
});

router.get('/api/wishlists', async (req, res) => {
    try {
        const userId = req.session.user._id;
        const wishlists = await Wishlist.find({ user: userId });
        res.json({ wishlists });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch wishlists' });
    };
});

// router.get('/api/wishlists/:userId', async (req, res) => {
//     const userId = req.params.userId;
//     try {
//         const wishlists = await Wishlist.find({ user: userId });
//         res.json({ wishlists });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch wishlists' });
//     }
// });

router.post('/api/wishlists/create', async (req, res) => {
    console.log(req.body);
    const wishlistName = req.body.name;
    // const userId = req.session.user._id;
    console.log(req.session.user);
    try {
        const newWishlist = new Wishlist({ name: wishlistName, user: userId });
        await newWishlist.save();

        const user = await User.findById(userId);
        user.wishlists.push(newWishlist);
        await user.save();

        res.status(200).json({ message: 'Wishlist created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create wishlist' });
    };
});

router.post('/api/wishlists/addProduct', async (req, res) => {
    const { wishlistId, productName } = req.body;
    try {
        const wishlist = await Wishlist.findById(wishlistId);

        if (!wishlist) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }
        wishlist.products.push(productName);
        await wishlist.save();

        return res.status(200).json({ message: 'Product added to wishlist' });
    } catch (error) {
        console.error('Error while adding product to wishlist:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;