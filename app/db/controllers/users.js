const Users = require('../models/users');
const hash = require('../../utils/bcrypt');

const usersController = {};

usersController.registerUser = async (req, res) => {
    const checkUser = await Users.findUser(req.body.email);

    if (checkUser.rowCount > 0) {
        return {
            res: res,
            message: 'already exist',
            code: 208
        }
    }
    const hashedPass = hash.setPassword(req.body.password);
    const userRole = req.body.role && req.body.role === 'admin' ? 'admin' : 'user';

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

usersController.findUser = (username) => {
    return Users.findUser(username)
        .then(user => user)
        .catch(e => console.log('ERROR WHILE FINDING', e))
};

usersController.findUserById = id => {
    return Users.findUserById(id)
        .then(user => user)
        .catch(e => console.log('ERROR WHILE FINDING BY ID', e))
};

module.exports = usersController;
