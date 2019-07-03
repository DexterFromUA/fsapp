const router = require('express').Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.render('user')
});

module.exports = router;
