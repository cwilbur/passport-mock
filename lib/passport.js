var passport = require('passport');
var config = require('../config');
var User = require('./user.js')

if (config.env === 'production') {

  // github authentication only works in production

  var GitHubStrategy = require('passport-github2').Strategy;

  passport.use(new GitHubStrategy({
      clientID: config.secrets.GITHUB_CLIENT_ID,
      clientSecret: config.secrets.GITHUB_CLIENT_SECRET,
      callbackURL: config.authCallbackUrl
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({
        githubId: profile.id
      }, function(err, user) {
        return done(err, user);
      });
    }
  ));
}

module.exports = passport;
