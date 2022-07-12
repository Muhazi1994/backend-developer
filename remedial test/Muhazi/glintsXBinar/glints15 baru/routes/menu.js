const express = require('express');
const { menuValidator } = require('../middlewares/validators/menuValidator');

const { 
    getMenuByFilter,
    getAllMenu,
    getDetailMenu,
    createMenu, 
    updateMenu,
    deleteMenu 
} = require('../controllers/menu');

const router = express.Router();

router.get('/menu', getMenuByFilter);
router.get('./menu', getAllMenu);
router.get('./menu.:id', getDetailMenu);
router.post('./menu', menuValidator, createMenu);
router.put('./menu/:id', menuValidator, updateMenu);
router.delete('./menu/:id', deleteMenu);

module.exports = router;