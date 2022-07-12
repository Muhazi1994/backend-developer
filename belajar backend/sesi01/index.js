const express = require("express"); // Import express
const fileUpload = require("express-fileupload");

// Import routes
const customer = require("./routes/customers")
const good = require("./routes/goods");
const supplier = require("./routes/suppliers");
// const transactions = require("./routers/transactions");

const port = process.env.PORT || 3000; // Define port

const app = express();

// Enable req.body (json and urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable req.body (form-data)
app.use(fileUpload());

app.use(express.static("public"));

// Make routes
app.use("/goods", good);
app.use("/customers", customer);
app.use("/suppliers", supplier);


// app.use("/transactions", transactions);

// Run the server
app.listen(port, () => console.log(`Server running on port ${port}`));