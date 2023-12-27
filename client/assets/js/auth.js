function register() {
    let email = $('#email').val().trim();
    let pass = $('#password').val().trim();
    let firstname = $('#firstname').val().trim();
    let lastname = $('#lastname').val().trim();
    let name = firstname + ' ' + lastname;
    let url = location.protocol + '//' + location.host + ':8080/api/register';

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

function login() {
    let email = $('#email').val().trim();
    let pass = $('#password').val().trim();
    let url = location.protocol + '//' + location.host + ':8080/api/login';

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

function deleteAccount() {
    let id = localStorage.getItem('id');
    let token = localStorage.getItem('token');
    if (id === null && token === null) {
        console.log('[ERROR] ID and Token is null.');
        return;
    }
    let url = location.protocol + '//' + location.host + ':8080/api/deleteuser';

    $.post(url, { id: id, token: token })
        .done(function(result) {
            console.log(result);
            localStorage.clear();
            window.location = '/';
        })
        .fail(function() {
            alert('Unable to delete account, please try again later.');
        });
}