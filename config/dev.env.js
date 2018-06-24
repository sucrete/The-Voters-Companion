var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
const Dotenv = require('dotenv-webpack')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_KEY: JSON.stringify(process.env.API_KEY),
  GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY),
  plugins: [
    new Dotenv()
  ]
})
