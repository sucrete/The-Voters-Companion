require('dotenv').config()
const Dotenv = require('dotenv-webpack')

module.exports = {
  NODE_ENV: '"production"',
  API_KEY: JSON.stringify(process.env.API_KEY),
  GOOGLE_API_KEY: JSON.stringify(process.env.GOOGLE_API_KEY),
  plugins: [
    new Dotenv()
  ]
}
