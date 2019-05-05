const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const authController = require('../controllers/auth');
const passwordUtility = require('../utils/passwordUtility');

require('dotenv').config();

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser((id, done) => {
    authController.findUserById(id)
        .then(user => done(null, user))
        .catch(err => done(err))
});

const options = {
    usernameField: 'email'
};

passport.use('login', new LocalStrategy(options, (username, password, done) => {
    console.log(username);
    authController.findUser(username)
        .then(user => {
            if (!user) {
                return done(null, false, {message: 'incorrect username'})
            } else if (!passwordUtility.comparePassword(password, user.rows[0].password)) {
                return done(null, false, {message: 'incorrect password'})
            } else
                return done(null, user.rows[0]);
        })
        .catch(e => done(e))
}));

const optionsJWT = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
};

passport.use('jwt', new JwtStrategy(optionsJWT, (payload, done) => {
    console.log('payload', payload);
    if (payload.id) {
        authController.findUserById(payload.id)
            .then(user => {
                if (user) {
                    done(null, user)
                }
                done(null, false)
            })
            .catch(e => done(e))
    }

    return done(null, false)
}));

module.exports = passport;
