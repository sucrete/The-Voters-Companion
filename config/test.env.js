var merge = require('webpack-merge')
var devEnv = require('./dev.env')
var google = require('googleapis')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  plugins: [
    new google()
  ]
})
