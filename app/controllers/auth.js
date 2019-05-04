const Users = require('../models/users');
const passwordUtility = require('../utils/passwordUtility');
const jwtUtility = require('../utils/jwtUtility');
const passport = require('../config/passport');
const authHelper = require('../helpers/auth');

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
    passport.authenticate('login', {session: false}, function (err, user) {
        if (err) {
            authHelper.handleResponse(res, 500, 'error');
        }
        if (!user) {
            authHelper.handleResponse(res, 404, 'User not found or wrong password');
        }
        if (user) {
            req.login(user, {}, function (err) {
                console.log('req session', JSON.stringify(req.session));
                if (err) {
                    authHelper.handleResponse(res, 500, 'error while user');
                } else {
                    const token = jwtUtility.generateJwT(user.id, user.email, user.firstName, user.lastName);
                    res.json({
                        user,
                        token
                    })
                }
            });
        }
    })(req, res, next);

    // let {email, password} = req.body;
    // const checkUser = await Users.findUser(email);
    //
    // if (checkUser.rowCount <= 0) {
    //     return res.json({message: 'Have no user'})
    // }
    //
    // const user = checkUser.rows[0];
    //
    // const checkPass = await passwordUtility.comparePassword(password, user.password);
    //
    // if (!checkPass) {
    //     return res.json({message: 'Incorrect password'})
    // }
    //
    // const token = await jwtUtility.generateJwT(user.id, user.email, user.firstName, user.lastName);
    // res.cookie('token', token);
    // res.redirect('/');
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
