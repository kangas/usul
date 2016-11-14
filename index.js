module.exports = Usul

var debug = require('debug')('usul')
var EventEmitter = require('events').EventEmitter
var inherits = require('inherits')

inherits(Usul, EventEmitter)

/**
 * Usul Client
 * @param {Object=} opts
 */
function Usul (opts) {
  var self = this
  if (!(self instanceof Usul)) return new Usul(opts)
  EventEmitter.call(self)

  if (!opts) opts = {}

  debug('new usul')

  // function ready () {
  //   if (self.destroyed) return
  //   self.ready = true
  //   self.emit('ready')
  // }
}

/**
 * Destroy the client, including all torrents and connections to peers.
 * @param  {function} cb
 */
Usul.prototype.destroy = function (cb) {
  if (this.destroyed) throw new Error('client already destroyed')
  // this._destroy(null, cb)
}
