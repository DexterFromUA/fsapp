const db = require('../config/db');

const Products = {};

Products.findAll = () => {
    return db.queryAsync(
        'SELECT * FROM products',
        []
    )
};

Products.Add = (title, author, bookyear) => {
    return db.queryAsync(
        'INSERT INTO products(title, author, bookyear) VALUES($1, $2, $3)',
        [title, author, bookyear]
    )
};

Products.Delete = (id) => {
    return db.queryAsync(
        'DELETE FROM products WHERE id = $1',
        [id]
    )
};

Products.Edit = (id, title, author, bookyear) => {
    return db.queryAsync(
        'UPDATE products SET title = $2, author = $3, bookyear = $4 WHERE id = $1',
        [id, title, author, bookyear]
    )
};

module.exports = Products;
