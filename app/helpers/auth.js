const jwt = require('express-jwt');

const authHelper = {};

authHelper.getTokenFromHeader = req => {
    const { headers: { authorization } } = req;

    if (authorization && authorization.split(' ')[0] === 'Token') {
        return authorization.split(' ')[1];
    }

    return null;
};

const auth = {
    required: jwt({
        secret: 'zaraffa',
        userProperty: 'payload',
        getToken: authHelper.getTokenFromHeader
    }),
    optional: jwt({
        secret: 'zaraffa',
        userProperty: 'payload',
        getToken: authHelper.getTokenFromHeader,
        credentialsRequired: false
    })
}

module.exports = {
    authHelper,
    auth
};
