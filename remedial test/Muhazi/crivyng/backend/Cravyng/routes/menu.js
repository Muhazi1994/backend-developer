
const express = require('express');


const {isSignedIn} = require('../middlewares/validators/auth')
const {menuValidator} = require('../middlewares/validators/menu')

const {
    getMenuByCategory, 
    getAllMenu,
    getDetailMenu,
    createMenu, 
    updateMenu,
    deleteMenu 
} = require('../controllers/menu');

const router = express.Router();


router.get("/home", getAllMenu);
router.get('/category/:categoryId', getMenuByCategory);
router.get('/:id', getDetailMenu);
router.post('/', isSignedIn,menuValidator, createMenu);
router.put("/:id", isSignedIn, menuValidator, updateMenu);
router.delete("/:id", isSignedIn, deleteMenu);

module.exports = router;
