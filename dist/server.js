// require('dotenv').config();
// const Dotenv = require('dotenv-webpack');

var express = require("express");

var serveStatic = require("serve-static");
const bodyParser = require("body-parser");
var rp = require("request-promise");
var compression = require("compression");

app = express();

app.use(compression());

app.use(serveStatic(__dirname)); //middleware

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function(err, req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

var VoterAPI = {
  karuthers: "all that's fit to print",
  stateIDs: "bobby",
  electionInfo: "bobby again",
  voterInfo: "stinger"
};

// GET INFORMATION FROM THE U.S. VOTE API
app.post("/api/postVoterAPI", function(req, res, next) {
  console.log(
    "\n" + "\t" + "+----------- postVoterAPI started -----------+" + "\n"
  );
  const hardUP = req.body.data.USVoteKey;
  var stateName = req.body.data.voterStateName;
  console.log(
    "\n" +
      "\t" +
      "+----------- stateName = " +
      stateName +
      " -----------+" +
      "\n"
  );
  var stateID = "";
  var statesOptions = {
    uri: "https://api.usvotefoundation.org/elections/v1/states",
    method: "GET",
    headers: {
      Authorization: "Token " + hardUP,
      "Content-Type": "application/json, text/plain, */*"
    },
    qs: {
      limit: 56
    },
    json: true
  };
  rp(statesOptions)
    .then(response => {
      VoterAPI.stateIDs = response;
      console.log(
        "\n" +
          "\n" +
          "futureElections" +
          "\n" +
          "\n" +
          "...thank god" +
          "\n" +
          "\n"
      );
      console.log(response);
      response.objects.forEach(where => {
        if (where.name === stateName) {
          stateID = where.id;
        }
      });
      var electionsOptions = {
        uri: "https://api.usvotefoundation.org/elections/v1/elections",
        headers: {
          Authorization: "Token " + hardUP,
          "Cache-Control": "no-cache"
        },
        qs: {
          state_id: stateID
        },
        json: true
      };
      rp(electionsOptions)
        .then(response => {
          VoterAPI.electionInfo = response;
          console.log(
            "\n" +
              "\n" +
              "stateVoterInformation" +
              "\n" +
              "\n" +
              "...thank god" +
              "\n" +
              "\n"
          );
          console.log(response);
          var voterInfoOptions = {
            uri:
              "https://api.usvotefoundation.org/elections/v1/state_voter_information",
            headers: {
              Authorization: "Token " + hardUP
            },
            qs: {
              state_id: stateID
            },
            json: true
          };
          rp(voterInfoOptions)
            .then(response => {
              VoterAPI.voterInfo = response;
              console.log(
                "\n" +
                  "\n" +
                  "voterInfo" +
                  "\n" +
                  "\n" +
                  "...thank god" +
                  "\n" +
                  "\n"
              );
              console.log(response);
              console.log("\n" + "\n" + "U.S. Vote Info LOGGED to API");
              res
                .status(200)
                .end("the res.end() worked on postVoterAPI method on server");
            })
            .catch(err => {
              console.log("voterInfo call failed. error ----> " + err);
              res.status(500).send({ error: err });
            });
        })
        .catch(err => {
          console.log("electionInfo call failed. error ----> " + err);
        });
    })
    .catch(err => {
      console.log("stateIDs call failed. error ----> " + err);
    });
});

app.get("/api/getVoterAPI", function(req, res) {
  console.log(
    "GETVOTERAPI method fired on server" +
      "\n" +
      "\n" +
      JSON.stringify(VoterAPI, null, "\t")
  );
  // res.send({info: stateInfo});
  // make some calls to database, fetch some data, information, check state, etc...
  // convert whatever we want to send (preferably should be an object) to JSON
  res.json(VoterAPI);
  res.status(200).end("the res.end() worked on getVoterAPI method on server");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("listening on localhost: 5000, papi");
});
console.log("server started " + port);
