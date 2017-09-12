var express = require('express')
var router  = express.Router()

router.use('/ip', require('./ip'))
router.use('/conversation', require('./conversation'))
router.use('/users', require('./users'))

module.exports = router