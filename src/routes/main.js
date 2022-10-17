const express = require('express');

const router = express.Router();
const mainControllers = require('../controllers/mainControllers.js')

router.get('/home', mainControllers.home);  //cuando tipeo en web /home, devuelve lo que esta dentro de mainControllers.home
router.get('/about', mainControllers.about);


module.exports = router