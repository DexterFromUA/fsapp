const Order = require('../models').ordersmodel;

module.exports = {
    getOrders: (req, res) => {
        return Order
            .findAll()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    setOrder: (req, res) => {
        console.log('BODY!!!', req.body);
        // return Order
        //     .create({
        //         userId: 1,
        //         productsId: [110, 155, 161]
        //     })
        //     .then(result => res.status(200).send(result))
        //     .catch(error => res.status(400).send(error))
    },
    changeOrder: (req, res) => {
        return Order
            .update()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    }
};
