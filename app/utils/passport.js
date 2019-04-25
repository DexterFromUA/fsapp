const passport = require('passport');

var usersController = require('../db/controllers/users');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        usersController.findUser(id)
            .then(user => done(null, user))
            .catch(err => done(err))
    })
};
