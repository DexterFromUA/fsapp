const router = require('express').Router();

require('dotenv').config();

const authController = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware.alreadyLogged, function (req, res) {
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

router.get('/createAdmin', authMiddleware.alreadyLogged, function (req, res) {
    res.render('createAdmin');
});

router.post('/createAdmin', authController.createAdmin);

module.exports = router;
