function updateBooking(id) {
    let startDate = $('#startDate').val().trim();
    let endDate = $('#endDate').val().trim();

    if (startDate === '') { alert('"Start date" input is required.'); return; }
    if (endDate === '') { alert('"End date" input is required.'); return; }

    let url = SETTINGS.API_URL + '/api/booking';

    $.post(url, {
        id: id,
        start_date: startDate,
        end_date: endDate
    })
        .done(function () {
            alert('Room booked from '+startDate+' to '+endDate);
            window.location = '/account'
        })
        .fail(function () {
            alert('Unable to book room, please try again later.');
        });
}