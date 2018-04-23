var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
const Dotenv = require('dotenv-webpack')
var he = require('he')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  plugins: [
    new Dotenv()
  ]
})
