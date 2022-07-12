const express = require('express'); // Import express

// Import routes
const suppliers = require('./routers/suppliers');

const port = process.env.PORT || 3000;

const app = express(); // Make express app

/* Enable req.body */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Make routes */
app.use('/suppliers', suppliers);

/* Run server */
app.listen(port, () => console.log(`Server running on ${port}`));
