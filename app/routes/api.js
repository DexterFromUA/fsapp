const router = require('express').Router();

const productController = require('../controllers/products');

router.get('/all', productController.findAll);

router.post('/add', productController.addProduct);

router.put('/edit/:id', productController.editProduct);

router.delete('/remove/:id', productController.deleteProduct);

module.exports = router;
