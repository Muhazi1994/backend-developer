let data = require('../models/data.json'); // Import data from models


class Covid19 {
  getAllCovid(req, res, next) {
    try {
      // Send response to client with status 200 (OK) and {data: data}
      res.status(200).json({ data: data });
    } catch (error) {
      // If something error it will send response to client with status 500 and {errors: ["Internal Server Error"]}
      res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  getDetailCovid(req, res, next) {
    try {
    
      let detailData = data.filter(
        (item) => item.id === parseInt(req.params.id)
      );

      if (detailData.length === 0) {
        // Send response to client that data is not found
        return res.status(404).json({ errors: ['data Covid not found'] });
      }

      // Send response to client with status 200 (OK) and {data: data}
      res.status(200).json({ data: detailData });
    } catch (error) {
      // If something error it will send response to client with status 500 and {errors: ["Internal Server Error"]}
      res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  addCovid(req, res, next) {
    try {
      // Get last id of students
      let lastId = data[data.length - 1].id;

      // Add student data to data
      data.push({
        id: lastId + 1,
        type: req.body.type,
        name: req.body.name,
        capital: req.body.capital,
        website: req.body.website,
      });

      // Send response to client with status 200 (OK) and {data: data}
      res.status(201).json({ data: data });
    } catch (error) {
      // If something error it will send response to client with status 500 and {errors: ["Internal Server Error"]}
      res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  updateCovid(req, res, next) {
    try {
      // Find the data is exist or not
      let findData = data.some((item) => item.id === parseInt(req.params.id));

      // If data not exists
      if (!findData) {
        
        return res.status(404).json({ errors: ['data covid not found'] });
      }
      data = data.map((item) =>
        item.id === parseInt(req.params.id)
          ? {
              id: parseInt(req.params.id),
              type: req.body.body,
              name: req.body.name,
              capital: req.body.capital,
              slug: req.body.slug,
            }
          : item
      );

      // It will response to client with status 201 (Created) and { data: data }
      res.status(200).json({ data: data });
    } catch (error) {
      // If something error, it will return response with status 500 and { errors: ["Internal Server Error"] }
      res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }

  deleteCovid(req, res, next) {
    try {
      // Find the data is exist or not
      let findData = data.some((item) => item.id === parseInt(req.params.id));

      // If data not exists
      if (!findData) {

        return res.status(404).json({ errors: ['data Covid not found'] });
      }


      data = data.filter((item) => item.id !== parseInt(req.params.id));


      res.status(200).json({ data: data });
    } catch (error) {
      // If something error, it will return response with status 500 and { errors: ["Internal Server Error"] }
      res.status(500).json({
        errors: ['Internal Server Error'],
      });
    }
  }
}

module.exports = new Covid19();
