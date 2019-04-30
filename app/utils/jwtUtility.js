const jwt = require('jsonwebtoken');

const jwtUtility = {};

jwtUtility.generateJwT = (id, username) => {
    const today = new Date();
    const expirationDate = new Date(today);

    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: username,
        id: id,
        exp: parseInt(expirationDate.getTime() / 1000, 10)
    }, 'zaraffa')
};

jwtUtility.toAuthJSON = (id, username) => {
    return {
        _id: id,
        email: username,
        token: jwtUtility.generateJwT(id, username)
    }
};

module.exports = jwtUtility;
