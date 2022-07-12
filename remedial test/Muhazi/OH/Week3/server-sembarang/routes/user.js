const express = require('express')
const router = express.Router()

const { 
    createUser,
    updateUser,
    getOneUser,
    getAllUser
} = require('../controllers/user')

const { upload } = require('../middleware/multer')


const {
    userDataValidation
} = require('../middleware/userValidation')

// router.use(authentication)

router.post('/user', upload.single('photo'), createUser)
router.put('/user/:user_id', updateUser)
router.get('/user', getOneUser)
router.get('/users', getAllUser)

module.exports = router