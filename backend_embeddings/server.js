// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/user'); // You will define this model

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/yourdb', { useNewUrlParser: true, useUnifiedTopology: true });

// POST endpoint for login
app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send('User not found');
        }

        const isMatch = await user.comparePassword(req.body.password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }

        // You can add token generation and handling here

        res.send('Login successful');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Listen on a port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
