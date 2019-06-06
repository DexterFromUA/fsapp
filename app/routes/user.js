const router = require('express').Router();
const passport = require('passport');
const path = require('path');

router.get('/', (req, res, next) => {
    res.render(path.join(__dirname, '..', 'client', 'user', 'build', 'index.html'))
    // res.json({
    //     message: 'secure route',
    //     user: req.user,
    //     token: req.query.secret_token
    // })
});

module.exports = router;


//passport.authenticate('jwt', {session: false}, null),