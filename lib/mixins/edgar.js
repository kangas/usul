'use strict'

const debug = require('debug')('usul.edgar')
const request = require('../request')

/**
 * For testing correct application of the mixin
 */
const getOpts = function () {
  debug('getOpts: %o', this.optsEdgar)
  return this.optsEdgar
}

const dailyIndex = function () {
  debug('dailyIndex')
  return request.edgarRequest('/daily-index/index.json')
}

const fullIndex = function () {
  debug('fullIndex')
  return request.edgarRequest('/full-index/index.json')
}

module.exports = {
  getOpts: getOpts,
  dailyIndex: dailyIndex,
  fullIndex: fullIndex
}
