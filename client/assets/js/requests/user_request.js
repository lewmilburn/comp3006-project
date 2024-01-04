function login() {
    let email = $('#email').val().trim();
    let pass = $('#password').val().trim();
    let url = SETTINGS.API_URL + '/api/login';

    $.post(url, { email: email, password: pass, name: name })
        .always(function() {
            $('#email').val('');
            $('#password').val('');
        })
        .done(function(result) {
            console.log(result);
            localStorage.setItem('id',result.id);
            localStorage.setItem('email',result.email);
            localStorage.setItem('name',result.name);
            localStorage.setItem('token',result.token);
            localStorage.setItem('role',result.role);
            window.location = '/';
        })
        .fail(function() {
            alert('Unable to login, please check your username and password and try again.');
        });
}