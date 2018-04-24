var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
const Dotenv = require('dotenv-webpack')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  plugins: [
    new Dotenv()
  ]
})
