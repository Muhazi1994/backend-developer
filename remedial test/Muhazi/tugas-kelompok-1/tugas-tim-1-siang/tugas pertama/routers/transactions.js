const express = require('express'); // Import express

// Import controller
const {
  createTransaction,
  getAllTransactions,
  getDetailTransaction,
  updateTransaction,
  deleteTransaction,
} = require('../controller/transactions');

// Make router
const router = express.Router();

router.get('/', getAllTransactions);
router.get('/:id', getDetailTransaction);
router.post('/', createTransaction);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);


module.exports = router; // Export router
// const express = require('express');

// const { createTransaction, getAllTransactions, getTransactionById } = require('../controllers/transactions');

// const router = express.Router();

// router.get('/list', getAllTransactions);
// router.get('/', getTransactionById);
// router.post('/', createTransaction);
// router.post('/', updateData)
// module.exports = router;

