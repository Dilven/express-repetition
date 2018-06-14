const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');
const applicationsController  = require('../controllers/applicationsController')

router.get('/', pageController.home);
router.post('/applications', applicationsController.store);

module.exports = router;

