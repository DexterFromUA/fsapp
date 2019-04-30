var express = require('express');
var router = express.Router();

const authController = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware.alreadyLogged ,function (req, res) {
    res.render('signup');
});

router.post('/', function (req, res, next) {
    authController.registerUser(req, res)
        .then(data => {
            if (data.code === 200) {
                res.redirect('/')
            } else if (data.code === 208) {
                res.redirect('/signup')
            } else res.redirect('/error')
        })
        .catch(e => next(e))
});

module.exports = router;
