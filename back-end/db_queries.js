const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const menuSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image_url: String,
    spiceness_level: String,
    // vegetarian: Boolean,
    vegan: Boolean,
    popular: Boolean,
    special: Boolean
});

const accountSchema = new mongoose.Schema({
    password: String,
    role: String,
    email: String,
    age: Number,
    first_name: String,
    last_name: String,
    phone_number: String,
    address: String,
});

accountSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(this.password, salt)
        this.password = hashPassword
    } catch (error) {
        next(error)
    }
})

const reviewSchema = new mongoose.Schema({
    user_id: String,
    menu_item: String,
    rating: Number,
    comment: String,
    date: String,
});

const staffSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    role: String,
    contact: {
        email: String,
        phone: String
    },
    start_date: String,
    shift: String,
    salary: Number
});

const orderSchema = new mongoose.Schema({
    customer: {
        customer_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Account', // Reference to the Account model for the customer
            required: true,
        },
        first_name: {
            type: String, // Store the customer's name
            required: true,
        },
        last_name: {
            type: String, // Store the customer's name
            required: true,
        },
        contact: {
            type: String, // Store the customer's name
            required: true,
        },
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product', // Reference to a Product model for each product in the order
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1, // Minimum quantity allowed per product
            },
        },
    ],
    orderDate: {
        type: Date,
        default: Date.now,
    },
    totalAmount: {
        type: Number,
        required: true,
        min: 0,
    },
    shippingAddress: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Account', // Reference to the Account model for the shipping address
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
        default: 'Pending',
    },
});


const db_menu = mongoose.model('menu-items', menuSchema);
const db_account = mongoose.model('accounts', accountSchema);
const db_review = mongoose.model('order-review', reviewSchema, 'order-review');
const db_staff = mongoose.model('staff', staffSchema, 'staff');
const db_order = mongoose.model('order', orderSchema,);


const getMenuDB = async () => {
    try {
        const data = await db_menu.find({});
        return data;
    } catch (error) {
        console.error('Error fetching menu data:', error);
        return []; // Return an empty array or handle the error as needed
    }
};

const setAccountDB = async (req) => {
    try {
        const data = new db_account(req.body); // Create a new instance of the model
        const result = await data.save(); // Save the instance to the database
        console.log("Data has been saved:", result);
    } catch (error) {
        console.error('Error Saving Account Data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
};

const findAccountDB = async (query) => {
    try {
        const data = await db_account.find(query);
        return data;
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}

const setOrderDB = async (query) => {
    try {
        const data = new db_order(query); // Create a new instance of the model
        const result = await data.save(); // Save the instance to the database
        console.log("Data has been saved:", result);
    } catch (error) {
        console.error('Error Saving Account Data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
};


const getOrderDB = async (query) => {
    try {
        const data = await db_order.find();
        return data;
    } catch (error) {
        console.error('Error fetching account data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}





module.exports = { getMenuDB, setAccountDB, findAccountDB, setOrderDB, getOrderDB };