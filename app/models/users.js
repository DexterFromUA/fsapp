const db = require('../config/db');

const Users = {};

Users.createUser = async(firstName, lastName, email, password, role) => {
    return db.queryAsync(
        'INSERT INTO users(name, lastName, mail, password, role) VALUES($1, $2, $3, $4, $5)',
        [firstName, lastName, email, password, role])
};

Users.findUser = (username) => {
    return db.queryAsync(
        'SELECT * FROM users WHERE mail = $1',
        [username]
    )
};

Users.findUserById = id => {
    return db.queryAsync(
        'SELECT * FROM users WHERE id = $1',
        [id]
    )
};

 module.exports = Users;
