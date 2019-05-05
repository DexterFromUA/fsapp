const Products = require('../models/products');

const productsController = {};

productsController.findAll = (req, res) => {
    Products.findAll(req, res)
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

module.exports = productsController;
