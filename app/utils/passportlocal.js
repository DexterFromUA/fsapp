const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const usersController = require("../db/controllers/users");
const init = require('./passport');
const hash = require('./bcrypt');

const options = {
    usernameField: 'email',
    passwordField: 'password'
};

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
    usersController.findUser(username)
        .then(user => {
            if (!user) {
                done(null, false)
            }
            else if (!hash.comparePassword(password, user.rows[0].password)) {
               done(null, false)
            }
            else done(null, user);
        })
        .catch(e => done(e))
}));

module.exports = passport;
