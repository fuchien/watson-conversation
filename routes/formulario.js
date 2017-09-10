const express = require('express')
const router = express.Router()

//Injeção de dependência
const FormularioController = require('../controllers/formulario')()

router.post('/', FormularioController.enviarDados.bind(FormularioController))

module.exports = router