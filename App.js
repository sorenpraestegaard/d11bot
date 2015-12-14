var express = require('express');
var bodyParser = require('body-parser');
var d11bot = require('./d11bot');

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function(request, response) {

  response
    .status(200)
    .send('Hello World!');

});

// hello route
app.post('/hello', d11bot);

// error handler
app.use(function(error, request, response, next) {

  console.error(error.stack);

  response
    .status(400)
    .send(error.message);

});

app.listen(port, function() {

  console.log('d11bot listening on port ' + port);

});
