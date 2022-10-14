const express = require('express');

const router = express.Router();
const mainControllers = require('../controllers/mainControllers.js')

router.get('/home', mainControllers.home);
router.get('/about', mainControllers.about);


module.exports = router