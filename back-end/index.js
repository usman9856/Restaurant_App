const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./db_link');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path')
const { getMenuDB, setAccountDB, findAccountDB, setOrderDB, 
  getOrderDB, getStaffDB, setMenuDB, getSpecificMenuDB,
  updateMenuDB,deleteMenuDB } = require('./db_queries');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
connectDB();

app.use(express.static(path.join(__dirname, '/menu_img')))


app.listen('5000', () => {
  console.log('Listening on port http://localhost:5000');
});


//API to get Standarad data of menu from DB
app.get('/', async (req, res) => {
  const data = await getMenuDB();
  res.json(data); // Send the data as JSON response
});



//API to add food into menu list with images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "menu_img");
  },
  filename: function (req, file, cb) {
    const image_url = file.fieldname + "-" + Date.now() + ".jpg";
    cb(null, image_url);
  },
});

const upload = multer({ storage: storage }).single("admin");

//Api to add food into menu list
app.post('/add-menu', upload, async (req, res) => {
  const image_url = req.file.filename;
  req.body.image_url = image_url;
  try {
    await setMenuDB(req.body);
    console.log("Added Menu Data:", req.body);
    res.send("add-menu called");
  } catch (error) {
    console.error("Error setting menu data in the database:", error);
    res.status(500).send("Internal Server Error");
  }
});

//api to register users accounts only
app.post('/register', async (req, res) => {
  // await connectDB();
  try {
    console.log("Register User Account: ",req.body)
    const result = await findAccountDB({ email: req.body.email });
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

//login API for admin and user accounts
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

//API to create food into Dattabase
app.post('/orders', async (req, res) => {
  try {
    // Assuming setOrderDB is a function that creates and saves an order based on the request body.
    const order = await setOrderDB(req.body);
    // Check if the order creation was successful
    if (!order) {
      // Handle the case where the order was not created successfully
      res.status(201).json({ message: 'Order created successfully', order });
      return;
    }
  } catch (error) {
    console.error("Error creating an order:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//API to get latest food orders 
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

//api to get specific menu item
app.post("/menu-edit", async (req, res) => {
  try {
    const result = await getSpecificMenuDB({ name: req.body.toEdit });

    if (result.length === 0) {
      res.status(404).json({ error: 'Content Not Found' });
    } else {
      res.status(200).json({ result });
    }
  } catch (error) {
    console.error("Error fetching menu data:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//update menu API
app.put("/menu-edit/:name", async (req, res) => {
  const menuName = req.params.name; // Extract the menu name from the URL
  console.log("This is parameter name send: ",menuName);
  try {
    const result = await updateMenuDB(menuName, req.body);
    console.log("This is Result: ",result);
    if (!result.acknowledged) {
      res.status(500).json({ error: 'Update Failed' });
    } else if (result.nModified === 0) {
      res.status(404).json({ error: 'Menu Not Found' });
    } else {
      res.status(200).json({ message: 'Menu updated successfully' });
    }
  } catch (error) {
    console.error("Error updating menu:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//api to get staff data 
app.get('/staff', async (req, res) => {
  try {
    const orders = await getStaffDB();
    if (!orders) {
      res.status(404).json({ message: 'No staff record found' });
      return;
    }
    else {
      res.status(200).json(orders);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// app.delete('/delete_menu', async (req, res) => {
//   res.send("Delete API Called with data: ",req.body)
// });

app.delete('/delete_menu', async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const orders = await deleteMenuDB(data);
    if (orders.acknowledged) {
      res.status(200).json({ message: 'Item Deleted Succesfully' });
      return;
    }
    else {
      res.status(500).json({ error: 'Failed to Delete Item' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }


});
