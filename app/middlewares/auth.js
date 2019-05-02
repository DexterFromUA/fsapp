const authMiddleware = {};

authMiddleware.isLoggedIn = (req, res, next) => {
    console.log(`User authenticated??? ${req.isAuthenticated()}`);
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/login');
};

authMiddleware.alreadyLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    return next()
};

authMiddleware.handleResponse = (res, code, statusMsg) => {
    res.status(code).json({status: statusMsg});
};

module.exports = authMiddleware;
