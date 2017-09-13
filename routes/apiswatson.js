const express = require('express')
const router = express.Router()

//Injeção de dependência
const ApisWatsonController = require('../controllers/apiswatson')()

router.post('/tone', ApisWatsonController.toneanalyzer.bind(ApisWatsonController))

module.exports = router