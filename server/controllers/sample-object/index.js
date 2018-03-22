'use strict'

const SampleObject = require('../../models/sample-object')

const sampleObjectProjection = {
  __v: false
}

const create = function (req, res, next) {
  SampleObject.create(req.body, (err, obj) => {
    if (err) return next(err)
    res.json(obj)
  })
}

const get = function (req, res, next) {
  SampleObject.findById(req.params.id, sampleObjectProjection, (err, obj) => {
    if (err) return next(err)
    res.json(obj)
  })
}

const update = function (req, res, next) {
  SampleObject.findByIdAndUpdate(req.params.id, req.body, (err, obj) => {
    if (err) return next(err)
    res.json(obj)
  })
}

const list = function (req, res, next) {
  SampleObject.find({}, sampleObjectProjection, (err, objList) => {
    if (err) return next(err)
    res.json(objList)
  })
}

const remove = function (req, res, next) {
  SampleObject.findByIdAndRemove(req.params.id, (err, obj) => {
    if (err) return next(err)
    res.json(obj)
  })
}

module.exports = {
  create: create,
  get: get,
  update: update,
  list: list,
  remove: remove
}
