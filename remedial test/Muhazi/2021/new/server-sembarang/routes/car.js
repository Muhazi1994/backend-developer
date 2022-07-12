const express = require('express')
const router = express.Router()

const { createCar } = require('../controllers/testmongo')

router.post('/car', createCar)

module.exports = router