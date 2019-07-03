const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const usersController = require('../controllers/usersController');
const passwordUtility = require('../helpers/passwordUtility');

require('dotenv').config();

module.exports = (passport) => {
    // passport.serializeUser((user, done) => {
    //     return done(null, user.id)
    // });
    //
    // passport.deserializeUser((id, done) => {
    //     return done(null, id)
    // });

    passport.use('login', new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
        usersController.findByMail(email)
            .then(user => {
                if (!user) {
                    return done(null, false, {message: 'incorrect username'})
                } else if (!passwordUtility.comparePassword(password, user.dataValues.password)) {
                    return done(null, false, {message: 'incorrect password'})
                } else
                    return done(null, user.dataValues, {message: 'success'});
            })
            .catch(e => done(e, false, {message: 'error while authenticate'}))
    }));

    passport.use('jwt', new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
        secretOrKey: process.env.SECRET
    }, (token, done) => {
        try {
            usersController.findByMail(token.user.email)
                .then(user => {
                    if (!user) {
                        return done(null, false, {message: 'incorrect user'})
                    } else {
                        return done(null, token.user)
                    }
                })
                .catch(e => done(e, false, 'error while authenticate'))
        } catch (e) {
            return done(e)
        }
    }));
};
