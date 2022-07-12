const express = require('express');


const {isSignedIn} = require('../middlewares/validators/auth')
const {createMenuValidator, updateMenuValidator} = require('../middlewares/validators/menuValidator')

const {
  getAllMenu,
  getMenuByCategory,
  getDetailMenu,
  createMenu,
  updateMenu,
  deleteMenu,
  getMenuByCategoryQuery,
} = require("../controllers/menuController");

const router = express.Router();


router.get("/home", getAllMenu);
router.get('/category/:categoryId', getMenuByCategory);
router.get("/category", getMenuByCategoryQuery);
router.get('/:id', getDetailMenu);
router.post('/', isSignedIn,createMenuValidator, createMenu);
router.put("/:id", isSignedIn, updateMenuValidator, updateMenu);
router.delete("/:id", isSignedIn, deleteMenu);

module.exports = router;