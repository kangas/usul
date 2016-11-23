'use strict'

const debug = require('debug')('usul.edgar')

const dailyIndex = function () {
  debug(
    'FIXME dailyIndex: %s',
    this.optsEdgar
    )
  return this.optsEdgar
}

const fromPrototype = function (prototype, object) {
  var newObject = Object.create(prototype)

  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      newObject[prop] = object[prop]
    }
  }

  return newObject
}

module.exports.fromPrototype = function (prototype) {
  return fromPrototype(prototype, {
    dailyIndex: dailyIndex
  })
}
