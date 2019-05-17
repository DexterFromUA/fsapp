const router = require('express').Router();

const usersController = require('../controllers/usersController');

router.get('/', function (req, res) {
    res.render('login');
});

router.post('/');

module.exports = router;
