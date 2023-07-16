var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('passwordCheck').value && document.getElementById('password').value.length >= 5) {
      document.getElementById('passwordCheck').style.borderColor = 'green';
      document.getElementById('password').style.borderColor = 'green';
      document.getElementById('match').innerHTML = '';
    }
    else if (document.getElementById('password').value ==
    document.getElementById('passwordCheck').value && document.getElementById('password').value.length < 5) {
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('passwordCheck').style.borderColor = 'red';
        document.getElementById('match').innerHTML = `* Password should be longer than ${document.getElementById("password").value.length} characters.`;
    }
    else {
      document.getElementById('password').style.borderColor = 'red';
      document.getElementById('passwordCheck').style.borderColor = 'red';
      document.getElementById('match').innerHTML = '* Passwords are not matching';
    }
  }