
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
    age:Number,
    first_name: String,
    last_name: String,
    phone_number: String,
    address: String,
});

accountSchema.pre('save',async function (next){
    try {
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(this.password,salt)
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

const db_menu = mongoose.model('menu-items', menuSchema);
const db_account = mongoose.model('accounts', accountSchema);
const db_review = mongoose.model('order-review', reviewSchema,'order-review');
const db_staff = mongoose.model('staff', staffSchema,'staff');


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



module.exports = { getMenuDB,setAccountDB,findAccountDB, };

// const getAccountDB = async () => {
//     try {
//         const data = await db_account.find({});
//         return data;
//     } catch (error) {
//         console.error('Error fetching account data:', error);
//         return []; // Return an empty array or handle the error as needed
//     }
// };
// const getReviewDB = async () => {
//     try {
//         const data = await db_review.find({});
//         return data;
//     } catch (error) {
//         console.error('Error fetching review data:', error);
//         return []; // Return an empty array or handle the error as needed
//     }
// };
// const getStaffDB = async () => {
//     try {
//         const data = await db_staff.find({});
//         return data;
//     } catch (error) {
//         console.error('Error fetching staff data:', error);
//         return []; // Return an empty array or handle the error as needed
//     }
// };