const Connection = require('../models');

class Transaction {
    async createTransaction (req, res, next) {
        try {
        const dbConnection = Connection.db('sales_afternoon');
        const transaction = dbConnection.Connection('transactions');

        const data = await transaction.insertOne (req.body);


        res.status(201).json({ data });
    } catch (error) {
        res.status(500).json({ errors: ['Internal Server Error']});
    }
    }
}

module.exports = new Transaction();