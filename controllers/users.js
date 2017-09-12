const watson = require('watson-developer-cloud');
const User = require('../models/user')

function UsersController() {

    this.pegarUser = (req, res, next) => {

        let login = req.body.login

        let users = [
            {
                nome: 'Chien',
                cpf: '111.111.111-11',
                description: 'Estagiário'
            },
            {
                nome: 'Julio',
                cpf: '222.222.222-22',
                description: 'B6'
            },
            {
                nome: 'Eduardo',
                cpf: '333.333.333-33',
                description: 'Estagiário'
            }
        ]

        let user = users.filter(user => user.cpf === login)

        if (user.length == 0 || user == null) {
            res.status(404).json({msg: 'Usuário não encontrado!'})
        } else {
            res.status(200).json(user)
        }

        // User.findOne({cpf: login}, (err,obj) => {

            // res.status(200).json(user)
        // })
    }

    this.salvarUser = (req, res, next) => {

        console.log(req.body)

        let newUser = new User({
            nome: req.body.nome,
            cpf: req.body.cpf,
            description: req.body.description
        })
    
        newUser.save((err, newuser) => {
            if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
            res.status(200).json(newuser)
        })
    }
}

module.exports = () => {

    return new UsersController()
}