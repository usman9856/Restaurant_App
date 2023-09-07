const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect('mongodb://localhost:27017/Restaurant-App');
            console.log('Database Connected!');
        } else {
            console.log('Database already connected!');
        }
    } catch (error) {
        console.error("Couldn't connect to MongoDB or already connected", error);
    }
};

module.exports = connectDB;