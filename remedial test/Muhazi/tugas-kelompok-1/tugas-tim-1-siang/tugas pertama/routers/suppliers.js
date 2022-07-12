const express = require('express'); // Import express

// Import controller
const {
    createSuppliers,
    getAllSuppliers,
    getDetailSuppliers,
    updateSuppliers,
    deleteSuppliers,
} = require('../controller/suppliers');

// Make router
const router = express.Router();

router.get('/', getAllSuppliers);
router.get('/:id', getDetailSuppliers);
router.post('/', createSuppliers);
router.put('/:id', updateSuppliers);
router.delete('/:id', deleteSuppliers);


module.exports = router; // Export router
// const express = require('express');

// const { createTransaction, getAllTransactions, getTransactionById } = require('../controllers/transactions');

// const router = express.Router();

// router.get('/list', getAllTransactions);
// router.get('/', getTransactionById);
// router.post('/', createTransaction);
// router.post('/', updateData)
// module.exports = router;

