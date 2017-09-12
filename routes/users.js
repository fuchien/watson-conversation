const express = require('express')
const router = express.Router()

//Injeção de dependência
const UsersController = require('../controllers/users')()

router.post('/', UsersController.salvarUser.bind(UsersController))
router.post('/user', UsersController.pegarUser.bind(UsersController))

module.exports = router