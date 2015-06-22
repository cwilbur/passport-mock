$(document).ready(function() {

  $('#login-button').on('click', function() {
    $('#login-button').attr('disabled', 'disabled');
    var loginInfo = {
      username: $('#gh-username').val(),
      password: $('#gh-password').val()
    };

    $.ajax({
      url: '/login',
      method: 'post',
      contentType: 'application/json',
      data: loginInfo,
      dataType: 'html',
    }).done(function(data) {

    })

  });



  $('#logout-button').on('click', function() {
    $('#logout-button').attr('disabled', 'disabled');

  });



});


login
if session.user.authToken | You are logged in as # {
  session.user.displayName
}.
button(id = 'logout-button'
  type = 'button') Log me out
else
  form(action = '/login'
    method = 'post'
    id = 'login-form') | Github username:
  input(form = 'login-form'
    type = 'text'
    name = 'gh-user'
    id = 'gh-user'
    size = '40'
    maxlength = '40') | Github password:
  input(form = 'login-form'
    type = 'password'
    name = 'gh-user'
    id = 'gh-user'
    size = '40'
    maxlength = '40')
button(form = 'login-form'
  id = 'login-button'
  type = 'button') Log me in !
