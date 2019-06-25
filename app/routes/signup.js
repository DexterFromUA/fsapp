const router = require('express').Router();

const userController = require('../controllers/usersController');

router.get('/', function (req, res) {
    res.render('signup');
});

// router.post('/', function (req, res, next) {
//     authController.registerUser(req, res)
//         .then(data => {
//             if (data.code === 200) {
//                 res.redirect('/')
//             } else if (data.code === 208) {
//                 res.redirect('/signup')
//             } else res.redirect('/error')
//         })
//         .catch(e => next(e))
// });

router.post('/', userController.add);

module.exports = router;
