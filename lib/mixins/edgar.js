'use strict'

const debug = require('debug')('usul.edgar')

/**
 * For testing correct application of the mixin
 */
const getOpts = function () {
  debug('getOpts: %s', this.optsEdgar)
  return this.optsEdgar
}

const dailyIndex = function () {
  debug('FIXME dailyIndex: %s', this.optsEdgar)
}

module.exports.getOpts = getOpts
module.exports.dailyIndex = dailyIndex
