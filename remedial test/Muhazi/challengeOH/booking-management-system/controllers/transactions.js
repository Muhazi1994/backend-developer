const { transaction, customer, reservation, room_name, room_type } = require('../models');

class Transaction {
  async getAllTransactions(req, res, next) {
    try {
      // Find all transactions
      let data = await transaction.find().populate({ path: 'customer' });

      if (data.length === 0) {
        return next({ message: 'Transactions not found', statusCode: 404 });
      }

      // Find every supplier for every data
      for (let i = 0; i < data.length; i++) {
        data[i].good.supplier = await supplier.findOne({
          _id: data[i].good.supplier,
        });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async getDetailTransaction(req, res, next) {
    try {
      // Find transaction by req.params.id
      let data = await transaction
        .findOne({ _id: req.params.id })
        .populate({ path: 'customer' });

      if (!data) {
        return next({ message: 'Transaction not found', statusCode: 404 });
      }

      // Add more detail data of good supplier
      data.good.supplier = await supplier.findOne({ _id: data.good.supplier });

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  async createTransaction(req, res, next) {
    try {
      // Create data into transaction
      const createdData = await transaction.create(req.body);

      // Find the new data
      let data = await transaction
        .findOne({ _id: createdData._id })
        .populate({ path: 'customer' })

      // Add more detail data of good supplier
      data.good.supplier = await supplier.findById(data.good.supplier);

      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

}

module.exports = new Transaction();