// const User = require('../models/user')
// const app = require('../app')
const datasource = require('../config/datasource')()

function UsersController() {

    this.pegarUser = (req, res, next) => {

        const Users = datasource.models.Users
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

        const Users = datasource.models.Users
        Users.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            descricao: req.body.descricao,
            admin: req.body.admin
        }).then(user => {
            res.status(200).json(user.dataValues)
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
}

module.exports = () => {

    return new UsersController()
}