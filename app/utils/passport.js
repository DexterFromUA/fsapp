const passport = require('passport');
const authController = require('../controllers/auth');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        authController.findUserById(id)
            .then(user => done(null, user))
            .catch(err => done(err))
    })
};
