const express = require('express');
const router = express.Router();

const auth = require('../utils/auth');

router.get('/', auth.isLoggedIn, (req, res, next) => {
    res.render('user')
});

module.exports = router;
