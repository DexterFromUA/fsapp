const Product = require('../models').productsmodel;

module.exports = {
    add: (req, res) => {
        return Product
            .create({
                title: req.body.title,
                author: req.body.author,
                bookyear: req.body.bookyear,
                price: req.body.price
            })
            .then(result => res.status(201).send(result))
            .catch(error => res.status(400).send(error))
    },
    findAll: (req, res) => {
        return Product
            .findAll()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    edit: (req, res) => {
        return Product
            .update({
                title: req.body.title,
                author: req.body.author,
                bookyear: req.body.bookyear,
                price: req.body.price
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    delete: (req ,res) => {
        return Product
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(result => res.sendStatus(200).send(result))
            .catch(error => res.status(400).send(error))
    }
};
