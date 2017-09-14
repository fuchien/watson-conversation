// const User = require('../models/user')
// const app = require('../app')
const datasource = require('../config/datasource')()

function UsersController() {

    this.pegarUser = (req, res, next) => {

        let cpf = req.body.login

        let users = [
            {
                nome: 'Chien',
                cpf: '111.111.111-11',
                description: 'Estagiário',
                admin: 1
            },
            {
                nome: 'Julio',
                cpf: '222.222.222-22',
                description: 'B6',
                admin: 1
            },
            {
                nome: 'Eduardo',
                cpf: '333.333.333-33',
                description: 'Estagiário',
                admin: 1
            },
            {
                nome: 'Guilherme',
                cpf: '444.444.444-44',
                description: 'Estagiário',
                admin: 0
            }
        ]

        // let user = users.filter(user => user.cpf === login)
        const Users = datasource.models.Users
        Users.findOne({where: {cpf: req.body.login}})
            .then(user => {
                if (user == undefined || user == null) {
                    res.status(400).json({
                        msg: 'Usuário não existe.',
                        error: error
                    });

                    return;
                }
                res.status(200).json(user.dataValues)
            })
            .catch(err => {
                res.status(400).json({msg: 'Usuário não encontrado!'})
            })

        // if (user.length == 0 || user == null) {
        //     res.status(404).json({msg: 'Usuário não encontrado!'})
        // } else {
        //     res.status(200).json(user)
        // }

        // User.findOne({cpf: login}, (err,obj) => {

            // res.status(200).json(user)
        // })
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

            res.status(412).json(err)
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