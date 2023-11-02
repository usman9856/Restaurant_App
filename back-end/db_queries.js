const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const ObjectId = mongoose.Types.ObjectId;



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
    customer_Id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    customer_name: {
        type: String,
        required: true,
    },
    customer_contact: {
        type: String,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to a Product model for each product in the order
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1, // Minimum quantity allowed per product
    },
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

// const orderSchema = new mongoose.Schema({
//     customer: {
//         customer_id: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Account', // Reference to the Account model for the customer
//             required: true,
//         },
//         first_name: {
//             type: String, // Store the customer's name
//             required: true,
//         },
//         last_name: {
//             type: String, // Store the customer's name
//             required: true,
//         },
//         contact: {
//             type: String, // Store the customer's name
//             required: true,
//         },
//     },
//     products: [
//         {
//             product: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'Product', // Reference to a Product model for each product in the order
//                 required: true,
//             },
//             quantity: {
//                 type: Number,
//                 required: true,
//                 min: 1, // Minimum quantity allowed per product
//             },
//         },
//     ],
//     orderDate: {
//         type: Date,
//         default: Date.now,
//     },
//     totalAmount: {
//         type: Number,
//         required: true,
//         min: 0,
//     },
//     shippingAddress: {
//         // type: mongoose.Schema.Types.ObjectId,
//         type: String,
//         ref: 'Account', // Reference to the Account model for the shipping address
//         required: true,
//     },
//     status: {
//         type: String,
//         enum: ['Pending', 'Processing', 'Shipped', 'Delivered'],
//         default: 'Pending',
//     },
// });


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

const getSpecificMenuDB = async (query) => {
    try {
        // console.log('query', query);
        const data = await db_menu.find(query);
        // console.log('data', data);
        return data;
    } catch (error) {
        console.error('Error fetching menu data:', error);
        throw error; // Rethrow the error so you can see the specific MongoDB error
    }
};

const setMenuDB = async (query) => {
    try {
        const data = new db_menu(query); // Create a new instance of the model
        const result = await data.save(); // Save the instance to the database
        console.log("Data has been saved:", result);
    } catch (error) {
        console.error('Error Saving Account Data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
};

const updateMenuDB = async (query) => {
    console.log("Query called from update menu:", query);
    try {
        const result = await db_menu.findByIdAndUpdate(
            { _id: query._id },
            {
                $set: {
                    name: query.name,
                    description: query.description,
                    price: query.price,
                    category: query.category,
                    image_url: query.image_url,
                    spiceness_level: query.spiceness_level,
                    vegan: query.vegan,
                    popular: query.popular,
                    special: query.special
                }
            }
        );
        console.log("Updated menu:", result);
        return result; // Returning the update result if needed
    } catch (error) {
        console.error("Error occurred while updating the menu:", error);
        throw error; // Throw the error for handling in the calling function
    }
};


const getStaffDB = async () => {
    try {
        const data = await db_staff.find({});
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
};

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

const deleteMenuDB = async (query) => {
    console.log(query);
    try {
        const objectId = new ObjectId(query.Id);
        console.log('Query ID: ', query.Id);
        console.log('Object ID: ', objectId);
        return await db_menu.deleteOne({ '_id': query.Id });

    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
}



module.exports = {
    getMenuDB, setAccountDB, findAccountDB,
    setOrderDB, getOrderDB, getStaffDB, setMenuDB, getSpecificMenuDB,
    updateMenuDB, deleteMenuDB
};