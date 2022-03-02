const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.attendee.index)

module.exports = router