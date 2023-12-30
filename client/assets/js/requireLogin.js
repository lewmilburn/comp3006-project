if (
    localStorage.getItem('id') === null ||
    localStorage.getItem('token') === null
) {
    window.location = '/';
}