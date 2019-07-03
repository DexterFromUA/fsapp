const bcrypt = require('bcrypt');

const passwordUtility = {};

passwordUtility.setPassword = password => {
    //const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, 10);
};

passwordUtility.comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
};

module.exports = passwordUtility;

