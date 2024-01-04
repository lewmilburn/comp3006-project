function register() {
    let email = $('#email').val().trim();
    let pass = $('#password').val().trim();
    let firstname = $('#firstname').val().trim();
    let lastname = $('#lastname').val().trim();
    let name = firstname + ' ' + lastname;
    let url = SETTINGS.API_URL + '/api/register';

    $.post(url, { email: email, password: pass, name: name })
        .always(function() {
            $('#email').val('');
            $('#password').val('');
        })
        .done(function() {
            window.location = '/login';
        })
        .fail(function() {
            alert('Unable to sign up, this account may already exist.');
        });
}