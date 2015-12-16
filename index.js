var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.set('port', process.env.VCAP_APP_PORT || 8080);

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
