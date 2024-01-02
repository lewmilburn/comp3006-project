function updateAccount() {
    let email = $('#emailInput').val().trim();
    let name = $('#nameInput').val().trim();
    let pass = $('#passInput').val().trim();

    let url = location.protocol + '//' + location.host + ':8080/api/user';

    if (pass === '') {
        pass = false;
    }

    $.post(url, { id: localStorage.getItem('id'), email: email, password: pass, name: name })
        .always(function() {
            $('#email').val('');
            $('#password').val('');
        })
        .done(function() {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('pass', pass);
            alert('Your account has been updated.');
            window.location = '/account';
        })
        .fail(function() {
            alert('Unable to update account, this account may already exist.');
        });
}