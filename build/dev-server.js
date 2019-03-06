require('./check-versions')()
const Dotenv = require('dotenv-webpack')
var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}
var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

// 🧿 FROM AMULET TO AMULET: used for api querying in development 🧿
var serveStatic = require('serve-static')
const bodyParser = require('body-parser')
var rp = require('request-promise')

app.use(serveStatic(__dirname))  //middleware

app.use(bodyParser.urlencoded({ extended: true}))

app.use(bodyParser.json())

app.use(function(err, req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})
// 🧿 ------------------------------------------------------------ 🧿

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
console.log('TROUBLESHOOTING    🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿🧿')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var VoterAPI = {karuthers: 'all that\'s fit to print',
  stateIDs: 'bobby',
  electionInfo: 'bobby again',
  voterInfo: 'stinger'
}

// GET INFORMATION FROM THE U.S. VOTE API
app.post('/api/postVoterAPI', function(req, res, next) {
  console.log('\n' + '\t' + '+----------- postVoterAPI started -----------+' + '\n')
  const hardUP = req.body.data.USVoteKey
  var stateName = req.body.data.voterStateName
  console.log('\n' + '\t' + '+----------- stateName = ' + stateName + ' -----------+' + '\n')
  var stateID = ''
  var statesOptions = {
    uri: 'https://api.usvotefoundation.org/elections/v1/states',
    method: 'GET',
    headers: {
      'Authorization': 'Token ' + hardUP,
      'Content-Type': 'application/json, text/plain, */*'
    },
    qs: {
      limit: 56
    },
    json: true
  }
  rp(statesOptions)
    .then(response => {
      VoterAPI.stateIDs = response
      console.log('\n' + '\n' + 'working' + '\n' + '\n' + '...thank god' + '\n' + '\n')
      console.log(response)
      response.objects.forEach(where => {
        if (where.name === stateName) {
          console.log(where.name)
          stateID = where.id
        }
      })
      console.log('\n' + '\n' + '\t' + '+------- stateID = ' + stateID + ' -------+' + '\n')
      var electionsOptions = {
        uri: 'https://api.usvotefoundation.org/elections/v1/elections',
        headers: {
          'Authorization': 'Token ' + hardUP,
          'Cache-Control': 'no-cache'
        },
        qs: {
          state_id: stateID
        },
        json: true
      }
      rp(electionsOptions)
        .then(response => {
          VoterAPI.electionInfo = response
          console.log('\n' + '\n' + 'twerking' + '\n' + '\n' + '...thank god' + '\n' + '\n')
          console.log(response)
          var voterInfoOptions = {
            uri: 'https://api.usvotefoundation.org/elections/v1/state_voter_information',
            headers: {
              'Authorization': 'Token ' + hardUP
            },
            qs: {
              state_id: stateID
            },
            json: true
          }
          rp(voterInfoOptions)
            .then(response => {
              VoterAPI.voterInfo = response
              console.log('\n' + '\n' + 'borking' + '\n' + '\n' + '...thank god' + '\n' + '\n')
              console.log(response)
              console.log('\n' + '\n' + 'U.S. Vote Info LOGGED to API')
              res.status(200).end('the res.end() worked on postVoterAPI method on server')
            })
            .catch(err => {
              console.log('voterInfo call failed. error ----> ' + err)
              res.status(500).send({ error: err })
            })
        })
        .catch(err => {
          console.log('electionInfo call failed. error ----> ' + err)
        })
    })
    .catch(err => {
      console.log('stateIDs call failed. error ----> ' + err)
    })
})

app.get('/api/getVoterAPI', function(req, res) {
  console.log('GETVOTERAPI method fired on server' + '\n' + '\n' + JSON.stringify(VoterAPI, null, '\t'))
  // res.send({info: stateInfo})
  // make some calls to database, fetch some data, information, check state, etc...
  // convert whatever we want to send (preferably should be an object) to JSON
  res.json(VoterAPI)
  res.status(200).end('the res.end() worked on getVoterAPI method on server')
})

var server = app.listen(port)

module.exports = {
  plugins: [
    new Dotenv()
  ],
  ready: readyPromise,
  close: () => {
    server.close()
  },
  loaders: [{
    test:   /\.md/
  }]
}
