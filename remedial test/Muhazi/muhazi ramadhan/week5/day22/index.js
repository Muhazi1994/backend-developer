require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});
const express = require('express');
// Import routers
const transactions = require('./routers/transactions');
const port = process.env.PORT || 3000; // Define port
const app = express(); // Make App


// Enable req.body (json and urlconded)
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// Routers
app.use('/transactions', transactions);
// Server running
app.listen(port, () => console.log(`Server running on ${port}`));
