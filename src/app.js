const express = require('express');
const Subscriber = require('./models/subscribers');
const path = require('path');
const app = express();
const cors = require('cors');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
// Routes
app.get('/subscribers', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/subscribers/names', async (req, res) => {
    try {
        const subscribers = await Subscriber.find().select('name subscribedChannel');
        res.json(subscribers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/subscribers/:id', async (req, res) => {
    try {
        const subscriber = await Subscriber.findById(req.params.id);
        if (!subscriber) {
            return res.status(400).json({ message: 'Subscriber not found' });
        }
        res.json(subscriber);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = app;
