const process = require('process')

const test = require('tape')
const Usul = require('../../')

test('edgar.getOpts', (t) => {
  t.plan(2)
  const client = new Usul({edgar: {hello: 'booya'}})

  client.on('error', function (err) { t.fail(err) })
  client.on('warning', function (err) { t.fail(err) })

  t.equals(client.edgar.getOpts().hello, 'booya')

  client.destroy(function (err) {
    t.error(err, 'client destroyed')
  })
})

if (process.env.USUL_TEST_REMOTE) {
  test('edgar.dailyIndex.fetch', (t) => {
    t.plan(3)
    const client = new Usul()
    client.on('error', (err) => { t.fail(err) })
    client.on('warning', (err) => { t.fail(err) })

    client.edgar.dailyIndex()
    .then((data) => {
      const idx = JSON.parse(data)
      t.equals(idx.directory.name, 'daily-index/')
      t.equals(idx.directory.item[0].name, '1994')
    })
    .catch((e) => { t.fail(e) })

    client.destroy((err) => { t.error(err, 'client destroyed') })
  })

  test('edgar.fullIndex.fetch', (t) => {
    t.plan(3)
    const client = new Usul()
    client.on('error', (err) => { t.fail(err) })
    client.on('warning', (err) => { t.fail(err) })

    client.edgar.fullIndex()
    .then((data) => {
      const idx = JSON.parse(data)
      t.equals(idx.directory.name, '/ftp/edgar/full-index/')
      t.equals(idx.directory.item[0].name, '1993')
    })
    .catch((e) => { t.fail(e) })

    client.destroy((err) => { t.error(err, 'client destroyed') })
  })
}
