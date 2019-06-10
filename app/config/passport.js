const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const usersController = require('../controllers/usersController');
const passwordUtility = require('../helpers/passwordUtility');

require('dotenv').config();

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        console.log('SERIALIZE!!!', user);
        return done(null, user.id)
    });

    passport.deserializeUser((id, done) => {
        // usersController.findById(id)
        //     .then(user => {
        //         console.log('USER!!!', user);
        //         if (user) {
        //             done(null, user.get())
        //         } else {
        //             done(user.error)
        //         }
        //     })
        console.log('DESERIALIZE!!!', id);
        return done(null, id)
    });

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
            .catch(e => done(e))
    }));

    passport.use('jwt', new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
        secretOrKey: process.env.SECRET
    }, (token, done) => {
        console.log('TOKEN!!!', token);
        try {
            return done(null, token.user)
        } catch (e) {
            return done(e)
        }
    }));
};
