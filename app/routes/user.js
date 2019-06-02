const router = require('express').Router();

const authMiddleware = require('../middlewares/auth');

router.get('/', (req, res, next) => {
    res.render('user.js')
});

module.exports = router;
