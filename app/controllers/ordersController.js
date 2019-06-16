const Order = require('../models').ordersmodel;
const User = require('../models').usersModel;
const OrderMiddle = require('../models').ordersProducts;
const Products = require('../models').productsmodel;

module.exports = {
    getOrders: (req, res) => {
        return Order
            .findAll({
                include: [
                    User,
                    {model: OrderMiddle, include: [Products]}
                ],
                order: [['createdAt', 'DESC']]
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    setOrder: (req, res) => {
         return Order
             .create({
                 userid: 50
             })
             .then(result => {
                 Promise.all(req.body.map(item => OrderMiddle.create({
                     orderId: result.dataValues.id,
                     productId: item[0],
                     amount: item[1]
                 })))
                     .then(result => res.status(200).send(result))
             })
             .catch(error => res.status(400).send(error))
    },
    changeStatus: (req, res) => {
        return Order
            .update({
                status: req.body.status
            },{
                where: {
                    id: req.params.id
                }
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    }
};
