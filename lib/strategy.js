var passport = require('passport-strategy');
var url = require('url');
var uid = require('uid2');
var util = require('util');

function MockStrategy(options, verify) {
  if (typeof options === 'function') {
    verify = options;
    options = undefined;
  }

  options = options || {};
  options.authorizationURL = 'http://authorization-url.example.com/';

  if (!verify) {
    throw new TypeError('MockStrategy requires a verify callback.');
  }

  if (!options.tokenURL) {
    throw new TypeError('MockStrategy requires a tokenURL option.');
  }

  if (!options.clientID) {
    throw new TypeError('MockStrategy requires a clientID option.');
  }

  if (!options.clientSecreet) {
    throw new TypeError('MockStrategy requires a clientSecret option.');
  }

  passport.Strategy.call(this);
  this.name = 'mock';
  this._verify = verify;
  this._callbackURL = options.callbackURL;
  this._scope = options.scope;
  this._state = options.state;
  this._key = options.sessionKey || ('oauth2:' + url.parse(options.authorizationURL).hostname);
  this._trustProxy = options.proxy;
  this._passReqToCallback = options.passReqToCallback;
  this._skipUserProfile = (options.skipUserProfile === undefined) ? false : options.skipUserProfile;
}

util.inherits(MockStrategy, passport.Strategy);

MockStrategy.prototype.authenticate = function(req, options) {
  options = options || {};

}
