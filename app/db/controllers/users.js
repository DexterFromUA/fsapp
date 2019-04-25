const Users = require('../models/users');

const usersController = {};

usersController.registerUser = (req, res, next) => {
    return Users.createUser(req, res, next)
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

usersController.findUser = (username) => {
    console.log('213');
    return Users.findUser(username)
        .then(user => {
            console.log('AFTER LOGIN!!!', user)
        })
        .catch(e => console.log('ERROR WHILE FINDING', e))
};

module.exports = usersController;
