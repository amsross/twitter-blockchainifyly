'use strict'
const { run } = require('apep')
const lib = require('./lib')

module.exports.tweet = (event, context, callback) => {
  callback(null, run(lib))
}
