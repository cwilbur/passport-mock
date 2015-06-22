var config = require('./config');
s
// models

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/guestbook');
var Entry = require('./lib/entry.js');
var User = require('./lib/user.js');

// basic express setup, views

var jade = require('jade');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './templates');

app.use(express.static(__dirname + '/public'));

// authentication

var passport = require('./lib/passport.js');

var apiRouter = require('./lib/api-routes.js');
app.use('/api', apiRouter);

app.get('/', function(req, res) {
  res.render('index', {
    name: "Max",
    message: 'Welcome to our contacts page! I hope you have a good stay.'
  });
});

var server = app.listen(3000, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
