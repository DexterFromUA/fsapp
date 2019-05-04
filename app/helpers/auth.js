const authHelper = {};

authHelper.handleResponse = (res, code, statusMsg) => {
    res.status(code).json({status: statusMsg});
};

module.exports = authHelper;
