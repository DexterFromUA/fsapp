const Op = require('sequelize').Op;
const deleter = require('../helpers/deleter');
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
            .findAndCountAll({
                offset: (req.params.page * req.params.amount) - req.params.amount,
                limit: req.params.amount,
                order: [['createdAt', 'DESC']]
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    findAllWithFilter: (req, res) => {
        // (page * limit) - limit
        //const count = (req.params.page * req.params.amount) - req.body.limit;

        return Product
            .findAll({
                offset: 0,
                limit: req.params.amount,
                order: [
                    ['createdAt', 'DESC']
                ],
                where: {
                    createdAt: {
                        [Op.between]: [req.params.start, req.params.end]
                    }
                }
            })
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
    delete: (req, res) => {
        return Product
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(result => res.sendStatus(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    addImage: (req, res) => {
        return Product
            .update({
                fileUrl: req.file.filename
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    removeImage: (req, res) => {
        console.log(req.params.url);

        return Product
            .update({
                fileUrl: null
            }, {
                where: {
                    fileUrl: req.params.url
                }
            })
            .then(result => {
                deleter(req.params.url);
                res.status(200).send(result)
            })
            .catch(error => res.status(400).send(error))
    }
};
