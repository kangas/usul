#!/usr/bin/env node

/*
 * TODO(kangas) THIS IS NOT YET USABLE
 */

'use strict'

// var spawn = require('cross-spawn')
// var args = require('yargs').argv;
var del = require('del')

// var runSauceLabs = !process.env.CI ||
//   (process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY)

// npmRun('test-node')

// npmRun('test-node', function () {
//   npmRun('test-browser-headless', function () {
//     if (runSauceLabs) {
//       npmRun('test-browser')
//     }
//   })
// })

clean()
  .resolve()

// function buildDocs () {
// }

function clean () {
  // Returns a promise
  return del('dist')
}

// function npmRun (scriptName, onSuccess) {
//   spawn('npm', ['run', scriptName], { stdio: 'inherit' }).on('close', function (code) {
//     if (code === 0 && onSuccess) {
//       onSuccess(code)
//     } else {
//       process.exit(code)
//     }
//   })
// }
