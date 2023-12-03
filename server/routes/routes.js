const express = require('express');
const User = require('../models/User');
const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product');

const router = express();

const bcrypt = require('bcrypt');

router.post('/api/register', async (req, res) => {
    // console.log("req.body", req.body);

    const { name, email, password, confirmPassword } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const encryptPassword = (password) => {
            return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
        };
        const hashedPassword = encryptPassword(password);
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
        console.log("Successfully created");
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
        // console.log(req.session);
        res.status(200).json({ message: 'Login successful', user });
        console.log("login success");
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/api/userData', (req, res) => {
    // console.log("userdata");
    // console.log("Session data:", req.session);
    if (req.session.user) {
        // console.log("session", req.session.user);
        res.status(200).json({ user: req.session.user });
    } else {
        res.status(401).json({ message: 'User data not found' });
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

// router.get('/api/wishlists', async (req, res) => {
//     try {
//         const userId = req.session.user._id;
//         const wishlists = await Wishlist.find({ user: userId });
//         res.json({ wishlists });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch wishlists' });
//     };
// });

router.get('/api/wishlists/:userId', async (req, res) => {
    const userId = req.params.userId;
    // console.log(userId);
    try {
        const wishlists = await Wishlist.find({ user: userId });
        if(wishlists){
            res.json({ wishlists });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch wishlists' });
    }
});

router.post('/api/wishlists/create/:id', async (req, res) => {
    const wishlistName = req.body.name;
    const userId = req.params.id;
    
    try {
        const newWishlist = new Wishlist({ name: wishlistName, user: userId });
        await newWishlist.save();

        const user = await User.findById(userId);
        user.wishlists.push(newWishlist);
        await user.save();

        res.status(200).json({ message: 'Wishlist created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create wishlist' });
    }
});

router.post('/api/wishlists/addProduct/:wishlistId', async (req, res) => {
    const  wishlistId  = req.params.wishlistId;
    const  productId  = req.body.productId;
    try {
        const wishlist = await Wishlist.findById(wishlistId);
        if (!wishlist) {
            // alert("Wishlist not found or Select an Existing wishlist");
            return res.status(404).json({ error: 'Wishlist not found' });
        }
        const existingProduct = wishlist.items.find(item => item.productId.toString() === productId);

        if (existingProduct) {
            // alert("Product already in wishlist");
            return res.status(400).json({ error: 'Product already exists in the wishlist' });
        }
        wishlist.items.push({
            productId: productId,
            imagePath: req.body.imagePath,
            price: req.body.price,
            productCode: req.body.productcode,
            title: req.body.title,
        });
        wishlist.totalQty = wishlist.items.length;
        await wishlist.save();

        // alert("Product added to wishlist successfully");
        res.status(200).json({ message: 'Product added to wishlist successfully', wishlist });
    } catch (error) {
        console.error('Error adding product to wishlist:', error);
        res.status(500).json({ error: 'Failed to add product to wishlist' });
    }
});

router.post('/api/editprofile/:id', async (req, res) => {
    const user_id = req.params.id;
    // console.log(req.body);

    try {
        const updatedUser = await User.findById(user_id);
        // console.log(updatedUser);

        if (!updatedUser) {
            console.log('User not found');
            return res.status(404).send('User not found');
        }

        updatedUser.mobileNumber = req.body.mobileNumber;
        updatedUser.gender = req.body.gender;
        updatedUser.dob = req.body.dob.toString();
        updatedUser.location = req.body.location;

        await updatedUser.save();

        console.log('Updated User:', updatedUser);
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Internal server error');
    }
});

router.get('/api/users/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});




module.exports = router;