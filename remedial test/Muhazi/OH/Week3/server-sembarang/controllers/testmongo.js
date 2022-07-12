const connection = require("../mongoDB");
console.log(connection)

module.exports = {
    async createCar(req, res, next) {
        try {
          const dbConnection = connection.db("latihanMongo");
          const cars = dbConnection.db("cars");
    
          const data = await cars.insertOne(req.body);
    
          res.status(201).json({ data });
        } catch (error) {
          console.log(error)
          res.status(500).json({ errors: error });
        }
    }
}