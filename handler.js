'use strict'
const Twitter = require('twitter')
const { opt, run } = require('apep')
const lib = require('./lib')

const twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

module.exports.tweet = (event, context, callback) => {
  const tweet = run(opt(lib, 0.25))

  if (!tweet) return callback(null, 'tweet skipped')

  twitter.post('statuses/update', { status: run(lib) }, (error, tweet, response) => {
    if (error) console.error(error)
    callback(error, tweet && tweet.text)
  })
}
