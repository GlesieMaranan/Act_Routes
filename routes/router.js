const express = require('express');
const router = express.Router();
const main = require('../controller/MainController');

router.get('/', main.index);
router.get('/index', main.index);
router.get('/about', main.index);
router.get('/contact', main.index);
router.get('/help', main.index);
router.get('/information', main.index);

module.exports = router;