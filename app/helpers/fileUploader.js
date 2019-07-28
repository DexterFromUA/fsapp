const path = require('path');
const multer = require('multer');

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
