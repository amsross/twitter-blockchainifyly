'use strict'
const { run } = require('apep')
const lib = require('./lib')

module.exports.tweet = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: run(lib)
  }

  callback(null, response)
}
