const router = require('express').Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.render(path.join(__dirname, '..', 'client', 'admin', 'build', 'i18n.js.html'))
});

module.exports = router;
