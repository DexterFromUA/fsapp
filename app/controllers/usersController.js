const User = require('../models').usersModel;
const bc = require('../helpers/passwordUtility');

module.exports = {
    add: (req, res) => {
        const hashedPassword = bc.setPassword(req.body.password);

        return User
            .create({
                name: req.body.firstName,
                lastName: req.body.lastName,
                mail: req.body.email,
                password: hashedPassword,
                role: 'user.js'
            })
            .then(result => res.status(201).send(result))
            .catch(error => res.status(400).send(error))
    },
    findAll: (req, res) => {
        return User
            .findAll()
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    findById: (id) => {
        return User
            .findByPk(id)
            .then(result => result)
            .catch(error => error)
    },
    findByMail: (mail) => {
        return User
            .findOne({
                where: {
                    mail: mail
                }
            })
            .then(result => result)
            .catch(error => error)
    },
    remove: (req, res) => {
        return User
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(result => res.sendStatus(200).send(result))
            .catch(error => res.status(400).send(error))
    },
    admin: (req, res) => {
        return User
            .update({
                role: 'admin'
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(result => res.status(200).send(result))
            .catch(error => res.status(400).send(error))
    }
};
