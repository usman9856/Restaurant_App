const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState !== 1) {
            // await mongoose.connect('mongodb://localhost:27017/Restaurant-App');
            // await mongoose.connect('mongodb+srv://um50766:kd0Jr8cwOJoQ8Yc6@cluster0.ajs32rc.mongodb.net/Restaurant-App');
            // await mongoose.connect('mongodb+srv://um50765:XgOj1xV9McNDBpb5@cluster0.ajs32rc.mongodb.net/Restaurant-App');
            await mongoose.connect('mongodb+srv://um50765:XgOj1xV9McNDBpb5@cluster0.ndipuon.mongodb.net/Restaurant-App');

            console.log('Database Connected!');
        } else {
            console.log('Database already connected!');
        }
    } catch (error) {
        console.error("Couldn't connect to MongoDB or already connected", error);
    }
};

module.exports = connectDB;