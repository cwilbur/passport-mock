$(document).ready(function() {

  $('#login-button').on('click', function() {
    window.location('/auth/github');
  });

  $('#logout-button').on('click', function() {
    window.location('/auth/logout')
  });

});
