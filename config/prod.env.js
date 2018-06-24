require('dotenv').config()
const Dotenv = require('dotenv-webpack')

module.exports = {
  NODE_ENV: '"production"',
  plugins: [
    new Dotenv()
  ]
}
