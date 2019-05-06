const Products = require('../models/products');

const productsController = {};

productsController.findAll = (req, res) => {
    Products.findAll()
        .then(products => {
            res.json({
                message: 'success',
                data: products
            })
        })
        .catch(e => {
            res.json({
                error: e
            })
        })
};

productsController.addProduct = () => {
    console.log('addProduct');
};

productsController.deleteProduct = () => {
    console.log('deleteProduct');
};

productsController.editProduct = () => {
    console.log('editProduct');
};

module.exports = productsController;
