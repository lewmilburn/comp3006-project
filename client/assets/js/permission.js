function isStaff() {
    return localStorage.getItem('role') === '1';
}

if (isStaff()) {
    $('#manageButton').removeClass('hidden');
}