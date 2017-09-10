var express = require('express')
var router  = express.Router()

router.use('/formulario', require('./formulario'))
router.use('/ip', require('./ip'))
router.use('/conversation', require('./conversation'))

module.exports = router