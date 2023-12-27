if (
    localStorage.getItem('id') === null ||
    localStorage.getItem('token') === null
) {
    window.location = '/';
}
console.log(localStorage.getItem('id'));