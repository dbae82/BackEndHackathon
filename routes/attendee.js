const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.attendee.index)
router.get('/team', ctrl.attendee.team)
router.get('/company', ctrl.attendee.company)
router.get('/title', ctrl.attendee.title)

module.exports = router