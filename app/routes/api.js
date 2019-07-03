const router = require('express').Router();

const uploader = require('../helpers/fileUploader');

const productsController = require('../controllers/productsController');
const usersController = require('../controllers/usersController');
const ordersController = require('../controllers/ordersController');

const authMiddleware = require('../middlewares/auth');

router.get('/all/:amount/:page', productsController.findAll);
router.get('/filtered/:amount/:page/:start/:end', productsController.findAllWithFilter);
router.post('/add', productsController.add);
router.put('/edit/:id', productsController.edit);
router.delete('/remove/:id', productsController.delete);
router.put('/upload/:id', uploader, productsController.addImage);
router.put('/removeupload/:url', productsController.removeImage);
router.get('/search/:search', productsController.findAllWithSearch);

router.get('/users', usersController.findAll);
router.delete('/users/:id', usersController.remove);
router.put('/users/makeadmin/:id', usersController.admin);

router.get('/orders', ordersController.getOrders);
router.post('/order', authMiddleware.isLoggedIn, ordersController.setOrder);
router.put('/status/change/:id', ordersController.changeStatus);

module.exports = router;
