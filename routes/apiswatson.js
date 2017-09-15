const express = require('express')
const router = express.Router()

//Injeção de dependência
const ApisWatsonController = require('../controllers/apiswatson')()

router.post('/tone', ApisWatsonController.addCrediciaisTone.bind(ApisWatsonController))
router.get('/tone', ApisWatsonController.pegarCredenciaisTone.bind(ApisWatsonController))

module.exports = router