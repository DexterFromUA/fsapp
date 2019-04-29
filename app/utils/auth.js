const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/login');
};

const alreadyLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/login')
    }
    return next()
};

const handleResponse = (res, code, statusMsg) => {
    res.status(code).json({status: statusMsg});
};

module.exports = {
    isLoggedIn,
    handleResponse,
    alreadyLogged
};
