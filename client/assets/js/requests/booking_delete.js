function deleteBooking(id) {
    if (id === '') { alert('"Unable to submit request, please reload the page and try again.'); return; }

    let url = SETTINGS.API_URL + '/api/deletebooking';

    $.post(url, {
        id: id
    })
        .done(function () {
            socketUpdateBookings();
            alert('Booking cancelled.');
            window.location = '/account'
        })
        .fail(function () {
            alert('Unable to cancel booking, please try again later or contact the hotel for help.');
        });
}