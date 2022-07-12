const express = require("express"); // Import express

// Import routes
const transactions = require("./routers/transactions");
const suppliers = require("./routers/suppliers");
const goods = require("./routers/goods");
const customer = require("./routers/customer");
const services = require("./routers/services");

const port = process.env.PORT || 3000;

const app = express(); // Make express app

/* Enable req.body */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Make routes */
app.use("/transactions", transactions);
app.use("/suppliers", suppliers);
app.use("/goods", goods);
app.use("/customer", customer);
app.use("/services", services);

/* Run server */
app.listen(port, () => console.log(`Server running on ${port}`));
