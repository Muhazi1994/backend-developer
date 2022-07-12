// Import exports
const express = require("express");
// Make express app
const app = express();

// Import albums router
const albums = require("./routers/albums");

// Define the port

const port = process.env.PORT || 3000;

// Enable req.body (JSON file)
app.use(express.json());
// Enable req.body (URL - Encoded)
app.use(express.urlencoded({ extended: true }));

// Handle client when client access to http://localhost:3000/albums
app.use("/albums", albums);

// Run this application on port 3000
app.listen(port, () => {
  console.log(`Server running on ${port}!`);
});
