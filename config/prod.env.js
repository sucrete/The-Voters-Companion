var google = require('googleapis')

module.exports = {
  NODE_ENV: '"production"',
  plugins: [
    new google()
  ]
}
