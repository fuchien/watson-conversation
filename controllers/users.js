// const User = require('../models/user')
// const app = require('../app')
const datasource = require('../config/datasource')()
const Users = datasource.models.Users

function UsersController() {

    this.pegarUser = (req, res, next) => {

        Users.findOne({where: {cpf: req.params.cpf}})
            .then(user => {
                if (user == undefined || user == null) {
                    res.status(400).json({
                        msg: 'Usuário não encontrado!',
                        error: error
                    });

                    return;
                }
                res.status(200).json(user.dataValues)
            })
            .catch(err => {
                res.status(400).json({msg: 'Usuário não encontrado!'})
            })
    }

    this.salvarUser = (req, res, next) => {

        Users.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            descricao: req.body.descricao,
            admin: req.body.admin
        }).then(user => {
            res.status(200).json({
                user: user.dataValues,
                msg: 'Salvo com sucesso!'
            })
        }).catch(err => {
            res.status(400).json(err)
        })

        // let newUser = new User({
        //     nome: req.body.nome,
        //     cpf: req.body.cpf,
        //     description: req.body.description
        // })
    
        // newUser.save((err, newuser) => {
        //     if (err) {
        //         return res.status(500).json({
        //             title: 'An error occurred',
        //             error: err
        //         });
        //     }
        //     res.status(200).json(newuser)
        // })
    }

    this.pegarUsers = (req, res, next) => {

        Users.findAll({})
            .then(user => {

                res.status(200).json(user)
            })
            .catch(err => {

                res.status(400).json(err)
            })
    }

    this.deletarUser = (req, res, next) => {

        Users.destroy({
            where: {
                id: req.params.id
            }
        }).then(resp => {

            res.status(200).json({
                msg: 'Deletado com sucesso'
            })
        }).catch(err => {

            res.status(400).json({
                msg: 'Erro ao deletar'
            })
        })
    }

    this.pegarUserId = (req, res, next) => {

        Users.findOne({
            where: {
                id: req.params.id
            }
        }).then(resp => {

            res.status(200).json(resp)
        }).catch(err => {

            res.status(400).json({
                msg: 'Erro ao achar'
            })
        })
    }

    this.atualizarUser = (req, res, next) => {

        Users.update({
            nome: req.body.nome,
            cpf: req.body.cpf,
            descricao: req.body.descricao,
            admin: req.body.admin
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {

            res.status(200).json({
                resp: result,
                msg: 'Sucesso ao atualizar'
            })
        }).catch(err => {

            res.status(400).json({
                resp: result,
                msg: 'Erro ao atualizar'
            })
        })
    }
}

module.exports = () => {

    return new UsersController()
}