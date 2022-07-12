// Import express
const express = require("express");

// Import albums controller
const {
  getAllAlbums,
  getDetailAlbums,
  addAlbums,
  updateAlbums,
  deleteAlbums,
} = require("../controllers/albums");

// Make a router
const router = express.Router();

// If client request to http://localhost:3000/albums (GET), it will go to getAllAlbums function in albums controller class
router.get("/", getAllAlbums);

// If client request to http://localhost:3000/albums/:id (GET), it will go to getDetailAlbums function in albums controller class
router.get("/:serialNumber", getDetailAlbums);

// If client request to http://localhost:3000/albums (POST), it will go to addAlbums function in albums controller class
router.post("/", addAlbums);

// If client request to http://localhost:3000/albums/:id (PUT), it will go to updateAlbums function in albums controller class
router.put("/:serialNumber", updateAlbums);

// If client request to http://localhost:3000/albums/:id (DELETE), it will go to getAllAlbums function in albums controller class
router.delete("/:serialNumber", deleteAlbums);

// Export the routers
module.exports = router;
