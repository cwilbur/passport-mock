var config = require('./config');

// models

var mongoose = require('mongoose');
mongoose.connect(config.mongo.uri);
var Entry = require('./lib/entry.js');
var User = require('./lib/user.js');

// basic express setup, views

var jade = require('jade');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './templates');

app.use(express.static(__dirname + '/public'));

// sessions
// must be configured before authentication

var session = require('express-session');
var mongoSessionDB = require('connect-mongodb-session')(session);
var store = new mongoSessionDB({
  uri: config.mongo.uri,
  collection: 'webSessions'
});

app.use(session({
  secret: config.secrets.SESSION_KEY,
  cookie: config.cookieOptions,
  resave: false,
  saveUninitialized: true
}));

// authentication

var passport = require('./lib/passport.js');
app.use(passport.initialize());
app.use(passport.session());





var apiRouter = require('./lib/api-routes.js');
app.use('/api', apiRouter);

app.get('/', function(req, res) {
  res.render('index', {
    name: "Max",
    message: 'Welcome to our contacts page! I hope you have a good stay.'
  });
});

var server = app.listen(config.serverPort, function() {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
