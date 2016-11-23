var test = require('tape')

var Usul = require('../../')

test('Hello', function (t) {
  // t.plan(1)

  var client = new Usul({})

  client.on('error', function (err) { t.fail(err) })
  client.on('warning', function (err) { t.fail(err) })

  client.destroy(function (err) {
    t.error(err, 'client destroyed')
  })
  t.end()
})

test('edgar.dailyIndex', function (t) {
  t.plan(2)
  var client = new Usul({edgar: {hello: 'booya'}})

  client.on('error', function (err) { t.fail(err) })
  client.on('warning', function (err) { t.fail(err) })

  t.equals(client.edgar.dailyIndex().hello, 'booya')

  client.destroy(function (err) {
    t.error(err, 'client destroyed')
  })
})
