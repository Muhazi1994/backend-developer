const express = require ('express');
const {getAllStudents} = require('../controllers/student')
const router = express.Router();

router.get('/', getAllStudents);
module.exports = router;
