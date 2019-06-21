const router = require('express').Router();
const path = require('path');
const passport = require('passport');

router.get('/', passport.authenticate('jwt', {session: false}, null), (req, res, next) => {
    res.render(path.join(__dirname, '..', 'client', 'user', 'build', 'index.html'))
});

module.exports = router;
