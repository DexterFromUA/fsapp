const jwt = require('jsonwebtoken');

require('dotenv').config();

const jwtUtility = {};

jwtUtility.generateJwT = (id, username, firstName, lastName) => {
    const today = new Date();
    const expirationDate = new Date(today);

    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: username,
        id: id,
        firstName: firstName,
        lastName: lastName,
        exp: parseInt(expirationDate.getTime() / 1000, 10)
    }, process.env.SECRET)
};

jwtUtility.toAuthJSON = (id, username) => {
    return {
        _id: id,
        email: username,
        token: this.generateJwT(id, username)
    }
};

module.exports = jwtUtility;
