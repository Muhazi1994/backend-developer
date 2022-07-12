// Import data album from dataAlbum in models
let albums = require("../models/dataAlbum.json");

// Make albums controller class
class Albums {
  // Make getAllAlbums
  getAllAlbums(req, res) {
    try {
      // Send response to client with status 200 (OK) and {albums: album}
      res.status(200).json({ albums: albums });
    } catch (error) {
      // If something wrong or error it will send response to client with status 500 and {errors: ["Internet server error"]}
      res.status(500).json({
        errors: ["Internet Server Error"],
      });
    }
  }

  // Make getDetailAlbums
  getDetailAlbums(req, res) {
    try {
      // Find album by req.params.serialNumber
      let detailAlbum = albums.filter(
        (elm) => elm.serialNumber === parseInt(req.params.serialNumber)
      );

      if (detailAlbum.length === 0) {
        //   Send response to client, when album not found
        return res.status(500).json({ errors: ["Album not found!"] });
      }

      // Send response to client with status 200 (OK) and {albums: album.serialNumber}
      res.status(200).json({ albums: detailAlbum });
    } catch (error) {
      // If something wrong or error it will send response to client with status 500 and {errors: ["Internet server error"]}
      res.status(500).json({
        errors: ["Internet Server Error"],
      });
    }
  }

  // Make addAlbums
  addAlbums(req, res) {
    try {
      // Get the last serial number of albums
      let lastSn = albums[albums.length - 1].serialNumber;

      //   Add album data to albums
      albums.push({
        serialNumber: lastSn + 1,
        name: req.body.name,
        artist: req.body.artist,
        year: req.body.year,
      });

      // Send response to client with status 201 (Created) and {albums: album}
      res.status(201).json({ albums: albums });
    } catch (error) {
      // If something wrong or error it will send response to client with status 500 and {errors: ["Internet server error"]}
      res.status(500).json({
        errors: ["Internet Server Error"],
      });
    }
  }

  // Make updateAlbums
  updateAlbums(req, res) {
    try {
      // Check the album is exist or not
      let findAlbum = albums.some(
        (elm) => elm.serialNumber === parseInt(req.params.serialNumber)
      );

      //   If album not exist
      if (!findAlbum) {
        // It will response to client with status 404 and errors: ["Album not found"]
        return res.status(404).json({ errors: ["Album not found"] });
      }

      //   Make update album of albums to album by req.params.serialNumber
      albums = albums.map((elm) =>
        elm.serialNumber === parseInt(req.params.serialNumber)
          ? {
              serialNumber: parseInt(req.params.serialNumber),
              name: req.body.name,
              artist: req.body.artist,
              year: req.body.year,
            }
          : elm
      );

      // Send response to client with status 200 (OK) and {albums: album}
      res.status(200).json({ albums: albums });
    } catch (error) {
      // If something wrong or error it will send response to client with status 500 and {errors: ["Internet server error"]}
      res.status(500).json({
        errors: ["Internet Server Error"],
      });
    }
  }

  // Make deleteAlbums
  deleteAlbums(req, res) {
    try {
      // Check the album is exist or not
      let findAlbum = albums.some(
        (elm) => elm.serialNumber === parseInt(req.params.serialNumber)
      );

      //   If album not exist
      if (!findAlbum) {
        // It will response to client with status 404 and errors: ["Album not found"]
        return res.status(404).json({ errors: ["Album not found"] });
      }

      //   Delete album of albums by album req.params.serialNumber
      albums = albums.filter(
        (elm) => elm.serialNumber !== parseInt(req.params.serialNumber)
      );

      // Send response to client with status 200 (OK) and {albums: album}
      res.status(200).json({ albums: albums });
    } catch (error) {
      // If something wrong or error it will send response to client with status 500 and {errors: ["Internet server error"]}
      res.status(500).json({
        errors: ["Internet Server Error"],
      });
    }
  }
}

// Exports Albums Class
module.exports = new Albums();
