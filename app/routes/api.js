const router = require('express').Router();

const uploader = require('../helpers/fileUploader');

const productsController = require('../controllers/productsController');
const usersController = require('../controllers/usersController');
const ordersController = require('../controllers/ordersController');

router.get('/all/:amount/:page', productsController.findAll);
router.get('/all/:amount/:start/:end', productsController.findAllWithFilter);
router.post('/add', productsController.add);
router.put('/edit/:id', productsController.edit);
router.delete('/remove/:id', productsController.delete);
router.put('/upload/:id', uploader, productsController.addImage);
router.put('/removeupload/:url', productsController.removeImage);

router.get('/users', usersController.findAll);
router.delete('/users/:id', usersController.remove);
router.put('/users/makeadmin/:id', usersController.admin);

router.get('/orders', ordersController.getOrders);

module.exports = router;
