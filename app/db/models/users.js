const bcrypt = require('bcrypt');
const db = require('../config');

const Users = {};

Users.createUser = async(req, res, next) => {
    var hashedPass = bcrypt.hashSync(req.body.password, 10);
    const checkUser = await Users.findUser(req.body.email);

    if (checkUser.rowCount > 0) {
        return {
            message: 'already exist',
            code: 208
        }
    }

    return db.queryAsync(
        'INSERT INTO users(name, lastName, mail, password, role) VALUES($1, $2, $3, $4, $5)',
        [req.body.firstName, req.body.lastName, req.body.email, hashedPass, 'user'])
};

Users.findUser = (mail) => {
    console.log('model');
    return db.queryAsync(
        'SELECT * FROM users WHERE mail = $1',
        [mail]
    )
};

 module.exports = Users;
