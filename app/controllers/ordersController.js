const Order = require('../models').ordersmodel;
const User = require('../models').usersModel;
const Product = require('../models').ordersProducts;
//const Products = require('../models').productsmodel;

module.exports = {
    getOrders: (req, res) => {
        return Order
            .findAll({
                include: [User, Product]
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    setOrder: (req, res) => {
         return Order
             .create({
                 userid: 1
             })
             .then(result => {
                 Promise.all(req.body.map(item => Product.create({
                     orderId: result.dataValues.id,
                     productId: item[0],
                     amount: item[1]
                 })))
                     .then(result => res.status(200).send(result))
             })
             .catch(error => res.status(400).send(error))
    },
    changeOrder: (req, res) => {
        return Order
            .update()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    }
};
