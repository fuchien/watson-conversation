const express = require('express')
const router = express.Router()

//Injeção de dependência
const IpController = require('../controllers/ip')()

router.get('/', IpController.validarIp.bind(IpController))

module.exports = router