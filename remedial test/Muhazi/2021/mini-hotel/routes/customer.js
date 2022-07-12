const express = require('express')

const router = express.Router()
const customer = require('../controller/customer')
const { authenticateUser } = require('../middleware/authenticate')
const { checkout } = require('../controller/payment')



router.get('/customers', customer.getAllCustomers)
router.post('/login', customer.login)
router.post('/customer', customer.createCustomer)

router.post('/login-otp', customer.loginOTP)
router.post('/verify-otp', customer.verifyOTP)

// router.use(authenticateUser)
router.get('/customer', customer.getProfile)
// router.get('/customer/balance', authenticateUser, customer.getProfile)

router.post('/checkout', checkout)

module.exports = router