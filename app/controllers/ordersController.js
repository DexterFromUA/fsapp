const Order = require('../models').ordersmodel;

module.exports = {
    getOrders: (req, res) => {
        return Order
            .findAll()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    }
};
