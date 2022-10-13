const express = require('express');

const router = express.Router();
const mainControllers = require('../controllers/mainControllers.js')

router.get('/', mainControllers.index);
router.get('/about', mainControllers.about);


module.exports = router