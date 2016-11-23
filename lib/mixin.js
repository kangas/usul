'use strict'

/**
 * A simple helper for applying an object of mixing methods.
 *
 * For a fancier ES6 approach see
 * http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
 */
const fromPrototype = function (prototype, object) {
  let newObject = Object.create(prototype)

  // In ES6 replace with Object.apply()
  for (let prop in object) {
    if (object.hasOwnProperty(prop)) {
      newObject[prop] = object[prop]
    }
  }

  return newObject
}

module.exports = fromPrototype
