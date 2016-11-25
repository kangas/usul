'use strict'

const debug = require('debug')('usul.request')
const https = require('https')

/**
 * For list of valid options:
 * https://nodejs.org/dist/latest-v6.x/docs/api/https.html#https_https_request_options_callback
 */

const edgarDefaultOptions = {
  hostname: 'www.sec.gov',
  port: 443,
  pathPrefix: '/Archives/edgar',
  method: 'GET'
}

function edgarRequest (path) {
  let options = Object.assign({}, edgarDefaultOptions)
  options.path = options.pathPrefix + path
  debug('edgarRequest: %o', options)

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.on('data', (d) => {
        resolve(d)
      })
    })
    req.end()

    req.on('error', (e) => {
      debug('error %o', e)
      reject(e)
    })
  })
}

module.exports.edgarRequest = edgarRequest
