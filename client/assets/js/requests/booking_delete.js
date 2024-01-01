function deleteBooking(id) {
    if (id === '') { alert('"Unable to submit request, please reload the page and try again.'); return; }

    let url = location.protocol + '//' + location.host + ':8080/api/deletebooking';

    $.post(url, {
        id: id
    })
        .done(function () {
            alert('Booking cancelled.');
            window.location = '/account'
        })
        .fail(function () {
            alert('Unable to cancel booking, please try again later or contact the hotel for help.');
        });
}