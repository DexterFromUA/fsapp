const router = require('express').Router();

const productsController = require('../controllers/productsController');
const usersController = require('../controllers/usersController');
const ordersController = require('../controllers/ordersController');

router.get('/all', productsController.findAll);

router.post('/add', productsController.add);

router.put('/edit/:id', productsController.edit);

router.delete('/remove/:id', productsController.delete);


router.get('/users', usersController.findAll);


router.get('/orders', ordersController.getOrders);

module.exports = router;
