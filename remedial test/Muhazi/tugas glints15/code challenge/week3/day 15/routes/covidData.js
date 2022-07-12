const express = require('express'); // Import express

const {
  getAllCovid,
  getDetailCovid,
  addCovid,
  updateCovid,
  deleteCovid,
} = require('../controllers/covidData');

const router = express.Router(); // Make router

router.get('/', getAllCovid);
router.get('/:id', getDetailCovid);
router.post('/', addCovid);
router.put('/:id', updateCovid);
router.delete('/:id', deleteCovid);

module.exports = router; // Exports router
