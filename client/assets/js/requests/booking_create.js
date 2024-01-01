function createBooking() {
    let user_id = localStorage.getItem('id');
    let room_id = $('#room_number').val().trim();
    let start_date = $('#start_date').val().trim();
    let end_date = $('#end_date').val().trim();

    if (start_date === '') { alert('"Start date" input is required.'); return; }
    if (end_date === '') { alert('"End date" input is required.'); return; }

    let url = location.protocol + '//' + location.host + ':8080/api/newbooking';

    $.post(url, {
        user_id: user_id,
        room_id: room_id,
        start_date: start_date,
        end_date: end_date
    })
        .done(function () {
            alert('Room booked from '+start_date+' to '+end_date);
            window.location = '/account'
        })
        .fail(function () {
            alert('Unable to book room, please try again later.');
        });
}