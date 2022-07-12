const express = require('express');


const {isSignedIn} = require('../middlewares/validators/auth')
const {createMenuValidator, updateMenuValidator} = require('../middlewares/validators/menuValidator')

const {
<<<<<<< HEAD:Cravyng/routes/menu.js
    getAllMenu,   
    getMenuByCategory, 
    getDetailMenu,
    createMenu, 
    updateMenu,
    deleteMenu, 
    getMenuByPrice
} = require ("../controllers/menuController")
=======
  getAllMenu,
  getMenuByCategory,
  getDetailMenu,
  createMenu,
  updateMenu,
  deleteMenu,
  getMenuByCategoryQuery,
} = require("../controllers/menuController");
>>>>>>> ac876cab3e0fba7b3b255e1a02408d6e65215134:routes/menu.js

const router = express.Router();


router.get("/home", getAllMenu);
router.get('/', getMenuByPrice);
router.get('/category/:categoryId', getMenuByCategory);
router.get("/category", getMenuByCategoryQuery);
router.get('/:id', getDetailMenu);
router.post('/', isSignedIn,createMenuValidator, createMenu);
router.put("/:id", isSignedIn, updateMenuValidator, updateMenu);
router.delete("/:id", isSignedIn, deleteMenu);

module.exports = router;