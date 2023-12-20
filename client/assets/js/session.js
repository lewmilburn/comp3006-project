$(document).ready(function() {
    let loginButton = $('#loginButton');
    let registerButton = $('#registerButton');

    let logoutButton = $('#logoutButton');
    let profileButton = $('#profileButton');

    if (
        localStorage.getItem('token') !== null &&
        localStorage.getItem('token') !== undefined
    ) {
        if (!loginButton.hasClass('hidden')) {
            loginButton.addClass('hidden');
        }
        if (!registerButton.hasClass('hidden')) {
            registerButton.addClass('hidden');
        }
        if (logoutButton.hasClass('hidden')) {
            logoutButton.removeClass('hidden');
        }
        if (profileButton.hasClass('hidden')) {
            profileButton.removeClass('hidden');
            profileButton.text(localStorage.getItem('name'));
        }
    } else {
        if (loginButton.hasClass('hidden')) {
            loginButton.removeClass('hidden');
        }
        if (registerButton.hasClass('hidden')) {
            registerButton.removeClass('hidden');
        }
        if (!logoutButton.hasClass('hidden')) {
            logoutButton.addClass('hidden');
        }
        if (!profileButton.hasClass('hidden')) {
            profileButton.addClass('hidden');
        }
    }
})