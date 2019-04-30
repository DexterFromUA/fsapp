const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware.isLoggedIn, (req, res, next) => {
    res.render('user')
});

module.exports = router;
