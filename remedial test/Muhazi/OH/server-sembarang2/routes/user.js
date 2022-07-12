const express = require('express')
const router = express.Router()

const { 
    createUser,
    updateUser,
    getOneUser,
    getAllUser
} = require('../controllers/user')

const {
    userDataValidation
} = require('../middleware/userValidation')

router.post('/user', userDataValidation, createUser)
router.put('/user/:user_id', updateUser)
router.get('/user', getOneUser)
router.get('/users', getAllUser)

module.exports = router