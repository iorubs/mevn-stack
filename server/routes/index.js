'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ whatchadoin: 'PaaSPure BackEnd' })
})

router.use('/sample-object', require('./api/sample-object'))

module.exports = router
