const express = require('express');


// Import controller
const { createBookings } = require('../controllers/bookings');

const router = express.Router();

router.route('/').post(createBookings);

module.exports = router;
