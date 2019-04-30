const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const authController = require("../controllers/auth");
const init = require('./passport');
const passwordUtility = require('./passwordUtility');

const options = {
    usernameField: 'email'
};

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
    authController.findUser(username)
        .then(user => {
            if (!user) {
                done(null, false)
            }
            else if (!passwordUtility.comparePassword(password, user.rows[0].password)) {
               done(null, false)
            }
            else done(null, user.rows[0]);
        })
        .catch(e => done(e))
}));

module.exports = passport;
