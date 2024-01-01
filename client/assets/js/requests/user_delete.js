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