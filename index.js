'use strict'

module.exports = Usul

const debug = require('debug')('usul')
const EventEmitter = require('events').EventEmitter
const inherits = require('inherits')
const parallel = require('run-parallel')

const mixin = require('./lib/mixin')
const edgarMixin = require('./lib/mixins/edgar')

/**
 * Usul version.
 */
// var VERSION = require('./package.json').version

inherits(Usul, EventEmitter)

/**
 * Usul Client
 * @param {Object=} opts
 */
function Usul (opts) {
  let self = this
  if (!(self instanceof Usul)) {
    return new Usul(opts)
  }
  EventEmitter.call(self)

  if (!opts) {
    opts = {}
  }

  self.destroyed = false
  self.requests = []

  debug('new usul')

  // function ready () {
  //   if (self.destroyed) return
  //   self.ready = true
  //   self.emit('ready')
  // }

  /**
   * Extend Usul with methods from source modules
   */
  self.optsEdgar = opts.edgar
  self.edgar = mixin(edgarMixin, self)
}

/**
 * Destroy the client, including all torrents and connections to peers.
 * @param  {function} cb
 */
Usul.prototype.destroy = function (cb) {
  if (this.destroyed) throw new Error('client already destroyed')
  this._destroy(null, cb)
}

Usul.prototype._destroy = function (err, cb) {
  let self = this
  debug('client destroy')
  self.destroyed = true

  let tasks = self.requests.map(function (request) {
    return function (cb) {
      request.destroy(cb)
    }
  })

  // if (self._tcpPool) {
  //   tasks.push(function (cb) {
  //     self._tcpPool.destroy(cb)
  //   })
  // }

  parallel(tasks, cb)

  if (err) self.emit('error', err)

  self.requests = []
  // self._tcpPool = null
}

/**
 * Check if `obj` is a node Readable stream
 * @param  {*} obj
 * @return {boolean}
 */
// function isReadable (obj) {
//   return typeof obj === 'object' && obj != null && typeof obj.pipe === 'function'
// }

/**
 * Check if `obj` is a W3C `FileList` object
 * @param  {*} obj
 * @return {boolean}
 */
// function isFileList (obj) {
//   return typeof FileList !== 'undefined' && obj instanceof FileList
// }
