function createRoom() {
    let type = $('#nr_type').val().trim();
    let room_number = $('#nr_room_number').val().trim();
    let floor_number = $('#nr_floor_number').val().trim();
    let max_guests = $('#nr_max_guests').val().trim();
    let price = $('#nr_price').val().trim();
    let description = $('#nr_description').val().trim();
    let image = $('#nr_image').val().trim();

    if (type === '') { alert('"Room type" input is required.'); return; }
    if (room_number === '') { alert('"Room number" input is required.'); return; }
    if (floor_number === '') { alert('"Floor number" input is required.'); return; }
    if (max_guests === '') { alert('"Maximum guests" input is required.'); return; }
    if (price === '') { alert('"Price" input is required.'); return; }
    if (description === '') { alert('"Description" input is required.'); return; }
    if (image === '') { alert('"Image" input is required.'); return; }

    let url = SETTINGS.API_URL + '/api/newroom';

    $.post(url, {
        type: type,
        room_number: room_number,
        floor_number: floor_number,
        max_guests: max_guests,
        price: price,
        description: description,
        image: image
    })
        .done(function () {
            clearCreateRoomForm();
            alert('Room added to system.');
        })
        .fail(function () {
            alert('A room with this room number already exists, please try again later.');
        });
}

function clearCreateRoomForm() {
    $('#nr_type').val('');
    $('#nr_room_number').val('');
    $('#nr_floor_number').val('');
    $('#nr_max_guests').val('');
    $('#nr_price').val('');
    $('#nr_description').val('');
    $('#nr_image').val('');
}