var express = require('express');
var jade = require('jade');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');

var mockUsers = require('./mockUsers.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', './templates');

app.use(morgan('dev'));
app.use(serveStatic('public'));
app.use(serveIndex('public'));


app.get('/loginRequest', function(req, res) {
  res.render('mockLogin', {
    users: mockUsers
  });
});

var server = app.listen(9000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Mock auth server listening at http://%s:%s', host, port);
});
