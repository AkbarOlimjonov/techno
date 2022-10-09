const { Router } = require('express')
const router = Router()
const constructor = require('../constructor/card')

router.get('/', constructor.getCard)

router.post('/buy/:id', constructor.buy)

module.exports = router