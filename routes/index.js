const express = require('express');

let router = express.Router()

const homeController = require('../controllers/home_controller');

router.get('/home',homeController.home);

const aboutController = require('../controllers/home_controller');

router.get('/aboutUs',aboutController.aboutUs);

module.exports = router;