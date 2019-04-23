const db = require('../config');

const Products = {};

Products.findAll = () => {
    return db.query(
        `SELECT * FROM products`
    )
};

module.exports = Products;