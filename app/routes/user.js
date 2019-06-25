const router = require('express').Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/../client/user/index.html'))
});

module.exports = router;
