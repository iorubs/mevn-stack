'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../../controllers/sample-object')

router.post('/', controller.create)
router.get('/:id', controller.get)
router.put('/:id', controller.update)
router.get('/', controller.list)
router.delete('/:id', controller.remove)

module.exports = router
