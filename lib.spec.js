const test = require('tape')
const { run } = require('apep')

test('lib', assert => {
  const lib = require('./lib')

  assert.equal(typeof run(lib), 'string', 'running it returns a string')

  assert.end()
})
