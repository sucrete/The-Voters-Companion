// require('dotenv').config();
// const Dotenv = require('dotenv-webpack');

var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const request = require('request');
var router = express.Router();

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

var VoterAPI = {};

// GET INFORMATION FROM THE U.S. VOTE API
app.post('/api/postVoterAPI', function(req, res, next) {

  var hardUp = req.body.data.USVoteKey;
  var stateName = req.body.data.voterStateName;
  var stateID;
  var statesOptions = {
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
  var electionsOptions = {
    uri: 'https://api.usvotefoundation.org/elections/v1/elections',
    headers: {
      'Authorization': 'Token ' + hardUP,
      'Cache-Control': 'no-cache'
    },
    params: {
      state_id: stateID
    }
  };
  var voterInfoOptions = {
    uri: 'https://api.usvotefoundation.org/elections/v1/state_voter_information',
    headers: {
      'Authorization': 'Token ' + hardUP
    },
    params: {
      state_id: stateID
    }
  };
  request(statesOptions,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        VoterAPI.stateIDs = body;
        console.log('\n' + '\n' + 'working' + '\n' + '\n' + '...thank god' + '\n' + '\n');
        console.log(JSON.stringify(JSON.parse(VoterAPI), null, '\t'));
      } else {
        console.log('states request on server did not work' + '\n' + error);
      }
    }
  );
  VoterAPI.stateIDs.data.objects.forEach(where => {
    if (where.name === stateName) {
      stateID = where.id
    }
  });
  request(electionsOptions,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        VoterAPI.electionInfo = body;
        console.log('\n' + '\n' + 'working' + '\n' + '\n' + '...thank god' + '\n' + '\n');
        console.log(JSON.stringify(JSON.parse(VoterAPI), null, '\t'));
      } else {
        console.log('elections request on server did not work' + '\n' + error);
      }
    }
  );
  request(voterInfoOptions,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        VoterAPI.voterInfo = body;
        console.log('\n' + '\n' + 'working' + '\n' + '\n' + '...thank god' + '\n' + '\n');
        console.log(JSON.stringify(JSON.parse(VoterAPI), null, '\t'));
      } else {
        console.log('voterInfo request on server did not work' + '\n' + error);
      }
    }
  );
  console.log('\n' + '\n' + 'U.S. Vote Info LOGGED to API')
  next();
});
app.get('/api/getVoterAPI', function(req, res) {
  console.log('GETVOTERAPI method fired on server' + '\n' + '\n' + JSON.stringify(VoterAPI, null, '\t'));
  // res.send({info: stateInfo});
  // make some calls to database, fetch some data, information, check state, etc...
  // convert whatever we want to send (preferably should be an object) to JSON
  res.send(VoterAPI || 'not able to res.send VoterAPI');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('listening on localhost: 5000, papi')
});
console.log('server started '+ port);
