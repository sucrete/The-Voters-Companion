
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const request = require('request');
app = express();

const options1 = {
  url: ''
}
app.use(serveStatic(__dirname)); //middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.get('/', function(req, res) {

  res.end('<div style="font-size: 2rem; color: grey;" > content building now </div>')
  console.log('bigppity boppity boo')
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('listening on localhost: 5000')
});
console.log('server started '+ port + ' bish');
