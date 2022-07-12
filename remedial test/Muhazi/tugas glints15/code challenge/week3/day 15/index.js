const express = require('express');
const app = express(); 

const covidData = require('./routes/covidData'); 

const port = process.env.PORT || 3000; // Define port

app.use(express.json()); // Enable req.body (JSON)
app.use(express.urlencoded({ extended: true })); // Enable req.body (URL-Encoded)

app.use('/covidData', covidData);

// Run this application on port 3000
app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
