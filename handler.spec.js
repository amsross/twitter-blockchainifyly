const test = require('tape')
const nock = require('nock')

test('handler', assert => {
  const handler = require('./handler')

  nock('https://api.twitter.com').post(/.*/).reply(200, {
    'text': 'Maybe he\'ll finally find his keys.'
  })

  handler.tweet(null, null, (err, string) => {
    assert.ifError(err, 'no error')

    assert.equal(typeof string, 'string', 'running it returns a string')

    assert.end()
  })
})
