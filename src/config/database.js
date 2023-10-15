// database.js

const mongoose = require('mongoose');

// Replace 'your-mongodb-uri' with your actual MongoDB URI
const mongoURI = 'mongodb+srv://dog-api:dog-api@cluster0.kq9jlqs.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

// Handle database connection events
db.on('error', (err) => {
    console.error(`MongoDB Connection Error: ${err}`);
});

db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = mongoose;
