var express = require('express');
var jade = require('jade');
var morgan = require('morgan');
var serveStatic = require('serve-static');

var mockUsers = require('./mockUsers.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', './templates');

app.use(morgan('dev'));
app.use(serveStatic('public'));


app.get('/loginRequest', function(req, res) {
  res.render('mockLogin', {
    users: mockUsers
  });
});

var server = app.createServer();

var host;
var port;

module.exports = {
  start: function(cb) {
    app.listen(9000, function() {
      host = server.address().address;
      port = server.address().port;

      console.log('Mock auth server listening at http://%s:%s', host, port);

      if (typeof cb === 'function') {
        cb(null, {
          event: 'start',
          host: host,
          port: port
        });
      }
    });
  },
  stop: function() {
    app.close(9000, function() {
      console.log('Mock auth server closed at http://%s:%s', host, port);

      if (typeof cb === 'function') {
        cb(null, {
          event: 'start',
          host: host,
          port: port
        });
      }

    });
  },
};
