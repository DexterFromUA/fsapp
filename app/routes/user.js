const router = require('express').Router();

const authMiddleware = require('../middlewares/auth');

router.get('/', (req, res, next) => {
    console.log('in user');
    res.render('user')
});

module.exports = router;
