const express = require('express');
const User = require('../models/User');
const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product');
const Checkout = require('../models/Checkout');
const Cart = require('../models/Cart');

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
        res.json({ products });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Products' });
    }
});

router.get('/api/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ product });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Product' });
    }
});

router.post('/api/carts/addToCart', async (req, res) => {
    const { productId, userId } = req.body;
    console.log(req.body);

    try {
        let userCart = await Cart.findOne({ user: userId });
        if (!userCart) {
            userCart = new Cart({ user: userId, items: [], totalQty: 0, totalCost: 0 });
        }
        const existingProductIndex = userCart.items.findIndex(item => item.productId.toString() === productId.toString());
        if (existingProductIndex !== -1) {
            userCart.items[existingProductIndex].qty += 1;
        } else {
            const productDetails = await Product.findById(productId);
            if (!productDetails) {
                return res.status(404).json({ error: 'Product not found' });
            }
            const product = {
                productId,
                qty: 1,
                price: productDetails.price,
                title: productDetails.title,
                imagePath: productDetails.imagePath,
                productCode: productDetails.productCode
            };
            userCart.items.push(product);
        }
        userCart.totalQty = userCart.items.reduce((total, item) => total + item.qty, 0);
        userCart.totalCost = userCart.items.reduce((totalCost, item) => {
            return totalCost + (item.price * item.qty);
        }, 0);
        await userCart.save();

        res.status(200).json({ message: 'Product added to cart successfully', cartId: userCart._id });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.delete('/api/wishlists/:wishlistId/removeProduct/:productId', async (req, res) => {
    const { wishlistId, productId } = req.params;
    
    try {
        let userWishlist = await Wishlist.findById(wishlistId);
        if (!userWishlist) {
            return res.status(404).json({ error: 'Wishlist not found' });
        }
        
        const productIndex = userWishlist.items.findIndex(item => item._id.toString() === productId);
        if (productIndex === -1) {
            return res.status(404).json({ error: 'Product not found in wishlist' });
        }
        
        userWishlist.items.splice(productIndex, 1);
        userWishlist.totalQty -= 1;
        
        if (userWishlist.items.length === 0) {
            await Wishlist.findByIdAndDelete(wishlistId);
            return res.status(200).json({ message: 'Wishlist deleted as no products are left' });
        }
        
        await userWishlist.save();
        res.status(200).json({ message: 'Product removed from wishlist successfully' });
    } catch (error) {
        console.error('Error removing product from wishlist:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.get('/api/carts/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const userCart = await Cart.findOne({ user: userId });
        if (!userCart) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        res.status(200).json({ cartItems: userCart.items });
    } catch (error) {
        console.error('Error fetching user cart items:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/api/checkouts/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
        const userCheckouts = await Checkout.find({ user: userId });
        // console.log(userCheckouts);
        if (!userCheckouts || userCheckouts.length === 0) {
            return res.status(404).json({ error: 'Checkouts not found' });
        }
        const checkoutItems = userCheckouts.flatMap(checkout => checkout.items);
        res.status(200).json({ checkoutItems });
    } catch (error) {
        console.error('Error fetching user checkout items:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/api/checkout', async (req, res) => {
    try {
        const { totalQty, totalCost, items, user } = req.body;
        // console.log(items);

        const checkout = new Checkout({
            totalQty,
            totalCost,
            items,
            user
        });
        await checkout.save();
        res.status(201).json({ message: 'Checkout successful', checkout });
        await Cart.deleteMany({ user: user });
    } catch (error) {
        console.error('Error creating checkout:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/api/wishlists/:userId', async (req, res) => {
    const userId = req.params.userId;
    // console.log(userId);
    try {
        const wishlists = await Wishlist.find({ user: userId });
        if (wishlists) {
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
    const wishlistId = req.params.wishlistId;
    const productId = req.body.productId;
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

        // console.log('Updated User:', updatedUser);
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

router.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/api/orders', async (req, res) => {
    try {
        const checkouts = await Checkout.find();
        res.status(200).json(checkouts);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;