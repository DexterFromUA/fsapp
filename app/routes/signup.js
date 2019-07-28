const router = require('express').Router();

const userController = require('../controllers/usersController');

router.get('/', function (req, res) {
    res.render('signup');
});

router.post('/', userController.add);

module.exports = router;
