const router = require('express').Router();
const path = require('path');
const multer = require('multer');
const Loki = require('lokijs');

var fileDB = new Loki(path.join(__dirname, '..', 'uploads', 'db.json'));

const productsController = require('../controllers/productsController');
const usersController = require('../controllers/usersController');
const ordersController = require('../controllers/ordersController');

router.get('/all', productsController.findAll);

router.post('/add', productsController.add);

router.put('/edit/:id', productsController.edit);

router.delete('/remove/:id', productsController.delete);


router.get('/users', usersController.findAll);

router.delete('/users/:id', usersController.remove);

router.put('/users/makeadmin/:id', usersController.admin);


router.get('/orders', ordersController.getOrders);
//////////////////////////////////////////////////

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads'))
    }
});

const upload = multer({
    storage: storage
});

router.post('/upload', upload.single('image'), (req, res, next) => {
    const image = {
        imageName: req.body.name,
        imageFile: req.file
    };
    console.log(image)

    res.send(image.imageFile);
});

module.exports = router;
