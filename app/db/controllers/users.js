const Users = require('../models/users');

const usersController = {};

usersController.registerUser = (req, res, next) => {
    return Users.createUser(req, res, next)
        .then(user => {
            res.json({
                message: 'success',
                code: res.statusCode,
                data: user
            })
        })
        .catch(e => {
            res.json({
                message: 'error',
                code: res.statusCode,
                data: e
            })
        })
};

module.exports = usersController;
