const bcrypt = require('bcrypt');

const setPassword = password => {
    const salt = bcrypt.genSaltSync();
    return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
};

module.exports = {
    setPassword,
    comparePassword
};
