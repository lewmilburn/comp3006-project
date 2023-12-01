function register() {
    let email = $('#email').val().trim();
    let pass = $('#password').val().trim();
    let firstname = $('#firstname').val().trim();
    let lastname = $('#lastname').val().trim();
    let name = firstname + ' ' + lastname;
    let url = location.protocol + '//' + location.host + ':8080/api/register';
    console.log(url);

    $.post(url, { email: email, password: pass, name: name })
        .done(function() {
            window.location = '/login';
        })
        .fail(function() {
            alert('Unable to sign up, please refresh the page and try again.');
        })
        .always(function() {
            $('#email').val('');
            $('#password').val('');
        });
}