require('dotenv').config();
const Dotenv = require('dotenv-webpack');

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const request = require('request');

app = express();

app.use(serveStatic(__dirname)); //middleware

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

var stateInfo = null;
app.post('/', function(req, res) {

  var hardUP = req.body.data.USVoteKey;

  var electionInfo = null;
  var data4States = {
    uri: 'https://api.usvotefoundation.org/elections/v1/states',
    method: 'GET',
    headers: {
      'Authorization': 'Token ' + hardUP,
      'Content-Type': 'application/json, text/plain, */*'
    },
    params: {
      limit: 57
    }
  };

  request(data4States,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('response: ' + JSON.stringify(response, null, '\t'));
        console.log('body: ' + body); // Prints web page or other biz.
        stateInfo = body;
        console.log('\n' + '\n' + 'working' + '\n' + '\n' + '...thank god' + '\n' + '\n');
        console.log(JSON.stringify(JSON.parse(stateInfo), null, '\t'));
      } else {
        console.log(error);
      }
    }
  );
  return res.send(stateInfo);
});

app.get('/', function(req, res) {
  res.send({info: stateInfo});
  console.log('here\'s some state infer:' + '\n' + stateInfo);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('listening on localhost: 5000' + ', bish')
});
console.log('server started '+ port);
