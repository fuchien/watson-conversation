const express = require('express')
const router = express.Router()

//Injeção de dependência
const UsersController = require('../controllers/users')()

router.post('/user', UsersController.salvarUser.bind(UsersController))
router.get('/:cpf', UsersController.pegarUser.bind(UsersController))
router.get('/user/:id', UsersController.pegarUserId.bind(UsersController))
router.put('/user/:id', UsersController.atualizarUser.bind(UsersController))
router.get('/', UsersController.pegarUsers.bind(UsersController))
router.delete('/:id', UsersController.deletarUser.bind(UsersController))

module.exports = router