const User = require('../models/User');

async function loginUser(req, res) {
    const { phone_number, password } = req.body;

    try {
        const user = await User.findOne({ phone_number, password });
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        res.json({ message: 'Authentication successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function registerUser(req, res) {
    const { phone_number, password } = req.body;

    try {
        const user = new User({ phone_number, password });
        await user.save();
        res.status(201).json({ message: 'Registration successful', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    loginUser,
    registerUser,
};
