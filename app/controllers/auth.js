const Users = require('../models/users');
const passwordUtility = require('../utils/passwordUtility');
const passport = require('../utils/passportLocal');
const authMiddleware = require('../middlewares/auth');

const authController = {};

authController.registerUser = async (req, res) => {
    const checkUser = await Users.findUser(req.body.email);
    const hashedPass = passwordUtility.setPassword(req.body.password);
    const userRole = req.body.role && req.body.role === 'admin' ? 'admin' : 'user';

    if (checkUser.rowCount > 0) {
        return {
            res: res,
            message: 'already exist',
            code: 208
        }
    }

    return Users.createUser(req.body.firstName, req.body.lastName, req.body.email, hashedPass, userRole)
        .then(user => {
            data = {
                message: user.message || 'success',
                code: user.code || res.statusCode,
                data: user
            };
            return data;
        })
        .catch(e => {
            res.json({
                message: 'error',
                code: res.statusCode,
                data: e
            })
        })
};

authController.loginUser = (req, res, next) => {
    passport.authenticate('local', {failureFlash: 'Error while login', successFlash: 'Done!'}, function (err, user) {
        console.log(`User authenticated? ${req.isAuthenticated()}`);
        if (err) { authMiddleware.handleResponse(res, 500, 'error'); }
        if (!user) { authMiddleware.handleResponse(res, 404, 'User not found or wrong password'); }
        if (user) {
            req.login(user, {}, function (err) {
                console.log('req session', JSON.stringify(req.session));
                if (err) { authMiddleware.handleResponse(res, 500, 'error while user'); }
                else {
                    console.log(`User authenticated? ${req.isAuthenticated()}`);
                    res.redirect('/');
                }
            });
        }
    })(req, res, next);
};

authController.findUser = (username) => {
    return Users.findUser(username)
        .then(user => user)
        .catch(e => console.log('ERROR WHILE FINDING', e))
};

authController.findUserById = id => {
    return Users.findUserById(id)
        .then(user => user)
        .catch(e => console.log('ERROR WHILE FINDING BY ID', e))
};

module.exports = authController;
