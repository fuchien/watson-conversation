const express = require('express')
const router = express.Router()

//Injeção de dependência
const ConversationController = require('../controllers/conversation')()

router.post('/', ConversationController.enviarDados.bind(ConversationController))

module.exports = router