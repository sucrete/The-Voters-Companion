
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const axios = require('axios');
const request = require('request');
app = express();


app.use(serveStatic(__dirname)); //middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.get('/overview:sumthin', function(req, res) {
  res.send('<div style="background-color: blue;"> content building now<div>')
  console.log(req)
});

function youreKillingMe (addy) {
  var options = {
    method: 'GET'

  }
}
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('listening on localhost: 5000')
});
console.log('server started '+ port);
