const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth');

router.get('/', function (req, res) {
    res.render('login');
});

router.post('/', authController.loginUser);

module.exports = router;
