const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const session = require('express-session');
const cookieParser = require("cookie-parser");

const router = require('./routes/routes');
const cors = require('cors');
const port = 5000;

const mongoURL = 'mongodb+srv://hemanth0921:mongodbpassword@nodetut.ej60wid.mongodb.net/GOG';

app.use(session({
    secret: 'GOG_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 180 * 60 * 1000}
}));
app.use(cors());

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
