var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('signup');
});

router.post('/', function (req, res, next) {
    res.send('FINISHED' + req.query.email);
    console.log('QUERY!!!', req.body)
});

module.exports = router;
