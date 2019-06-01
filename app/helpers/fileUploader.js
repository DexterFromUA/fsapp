const path = require('path');
const multer = require('multer');
// const Loki = require('lokijs');
//
// var fileDB = new Loki(path.join(__dirname, '..', 'uploads', 'db.json'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
});

const uploader = multer({storage: storage}).single('image');

module.exports = uploader;
