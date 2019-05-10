const Products = require('../models/products');

const productsController = {};

productsController.findAll = (req, res) => {
    Products.findAll()
        .then(products => {
            res.json({
                message: 'success',
                data: products.rows
            })
        })
        .catch(e => {
            res.json({
                error: e
            })
        })
};

productsController.addProduct = (req, res) => {
    console.log('addProduct');
};

productsController.deleteProduct = (req, res) => {
    console.log('deleteProduct');
};

productsController.editProduct = (req, res) => {
    console.log('editProduct');
};

module.exports = productsController;
