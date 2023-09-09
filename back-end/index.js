const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./db_link');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path')
const { getMenuDB, setAccountDB, findAccountDB, setOrderDB, getOrderDB } = require('./db_queries');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
connectDB();

app.use(express.static(path.join(__dirname, '/menu_img')))


app.listen('5000', () => {
  console.log('Listening on port http://localhost:5000');
});


app.get('/', async (req, res) => {
  const data = await getMenuDB();
  res.json(data); // Send the data as JSON response
});


const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "menu_img");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("admin");


app.post('/add-menu', upload, async (req, res) => {
  res.send("add-menu called");
  console.log(req.body); // Use req.file to access the uploaded file
});


app.post('/register', async (req, res) => {
  // await connectDB();
  try {
    console.log(req.body)
    const result = await findAccountDB({ email: req.body.email });
    console.log(result)
    if (result.length > 0) {
      res.status(409).json({ error: 'Email already exists' }); // Respond with an error message
    } else {
      await setAccountDB(req)
      res.status(200).json({ message: 'Registeration Complete' }); // Respond with a positive message

    }
  } catch (error) {
    console.error("Error fetching account data:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/login', async (req, res) => {
  try {
    const result = await findAccountDB({ email: req.body.email });
    if (result.length === 0) {
      res.status(401).json({ error: 'Email not found' });
      return;
    }
    const hashPassword = result[0].password;
    // Compare hashed password from the database with the provided password
    if (bcrypt.compareSync(req.body.password, hashPassword) && req.body.role === result[0].role) {
      res.status(200).json({ message: 'Login Successful', role: result[0].role });
    } else {
      res.status(401).json({ error: 'Incorrect credentials' });
    }
  } catch (error) {
    console.error("Error fetching account data:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/orders', async (req, res) => {
  try {
    // Assuming setOrderDB is a function that creates and saves an order based on the request body.
    const order = await setOrderDB(req.body);
    // Check if the order creation was successful
    if (!order) {
      // Handle the case where the order was not created successfully
      res.status(201).json({ message: 'Order created successfully', order });
      return;
    } } catch (error) {
    console.error("Error creating an order:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/orders', async (req, res) => {
  try {
    const orders = await getOrderDB();
    if (!orders) {
      res.status(404).json({ message: 'No orders found' });
      return;
    }
    else {
      res.status(200).json(orders);
    }
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





























// app.get('/reviews', async (req, res) => {
//   const reviewData = await getReviewDB();
//   res.json(reviewData);
// });

// app.get('/staff', async (req, res) => {
//   const staffData = await getStaffDB();
//   res.json(staffData);
// });

// app.get('/account', async (req, res) => {
//   const accountData = await getAccountDB();
//   res.json(accountData); // Send the data as JSON response
// });
