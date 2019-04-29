const passport = require('passport');
const usersController = require('../db/controllers/users');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.rows[0].id);
    });

    passport.deserializeUser((id, done) => {
        usersController.findUserById(id)
            .then(user => done(null, user))
            .catch(err => done(err))
    })
};
