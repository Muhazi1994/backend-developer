const express = require('express');

// Import controllers
const {
  getAllTransactions,
  createTransaction,
  getDetailTransaction,
} = require('../controllers/transactions');

const router = express.Router();

// It will find route that has / first after that it will find is it GET or POST
router
  .route('/')
  .get(getAllTransactions)
  .post(createTransaction);

// It will find route that has /:id first after that it will find is it GET or PUT or DELETE
router
  .route('/:id')
  .get(getDetailTransaction)

module.exports = router;
