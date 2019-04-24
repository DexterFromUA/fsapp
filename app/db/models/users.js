const bcrypt = require('bcrypt');
const db = require('../config');

const Users = {};

Users.createUser = (req, res, next) => {
    var hashedPass = bcrypt.hashSync(req.body.password, 10);

    return db.queryAsync(
        'INSERT INTO users(name, lastName, mail, password, role) VALUES($1, $2, $3, $4, $5)',
        [req.body.firstName, req.body.lastName, req.body.email, hashedPass, 'user'])
};
 module.exports = Users;
