const test = require('tape')
const Usul = require('../../')

test('edgar.getOpts', function (t) {
  t.plan(2)
  let client = new Usul({edgar: {hello: 'booya'}})

  client.on('error', function (err) { t.fail(err) })
  client.on('warning', function (err) { t.fail(err) })

  t.equals(client.edgar.getOpts().hello, 'booya')

  client.destroy(function (err) {
    t.error(err, 'client destroyed')
  })
})
