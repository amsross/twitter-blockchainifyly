const test = require('tape')

test('handler', assert => {
  const handler = require('./handler')

  handler.tweet(null, null, (err, string) => {
    assert.ifError(err, 'no error')

    assert.equal(typeof string, 'string', 'running it returns a string')

    assert.end()
  })
})
