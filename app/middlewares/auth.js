const passport = require('../config/passport');

const authMiddleware = {};

authMiddleware.isLoggedIn = (req, res, next) => {
    console.log(`User authenticated??? ${req.isAuthenticated()}`);
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/login');
};

authMiddleware.alreadyLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    return next()
};

authMiddleware.requiredLogin = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (req, res, next) => {
        return next();
    })
};

module.exports = authMiddleware;
