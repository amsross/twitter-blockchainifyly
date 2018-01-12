const test = require('tape')
const pep = require('apep')

test('lib', assert => {
  const lib = require('./lib')

  assert.equal(typeof pep.run(lib), 'string', 'running it returns a string')

  assert.end()
})
