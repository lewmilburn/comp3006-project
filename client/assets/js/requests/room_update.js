function updateRoom() {
    let id = $('#ur_id').val().trim();
    let type = $('#ur_type').val().trim();
    let room_number = $('#ur_room_number').val().trim();
    let floor_number = $('#ur_floor_number').val().trim();
    let max_guests = $('#ur_max_guests').val().trim();
    let price = $('#ur_price').val().trim();
    let description = $('#ur_description').val().trim();
    let image = $('#ur_image').val().trim();

    console.log("'"+id+"'");

    if (id === '') { alert('"Room ID" not found, please reload the page and try again.'); return; }
    if (type === '') { alert('"Room type" input is required.'); return; }
    if (room_number === '') { alert('"Room number" input is required.'); return; }
    if (floor_number === '') { alert('"Floor number" input is required.'); return; }
    if (max_guests === '') { alert('"Maximum guests" input is required.'); return; }
    if (price === '') { alert('"Price" input is required.'); return; }
    if (description === '') { alert('"Description" input is required.'); return; }
    if (image === '') { alert('"Image" input is required.'); return; }

    let url = SETTINGS.API_URL + '/api/room';

    $.post(url, {
        id: id,
        type: type,
        room_number: room_number,
        floor_number: floor_number,
        max_guests: max_guests,
        price: price,
        description: description,
        image: image
    })
        .done(function () {
            socketUpdateRoom();
            closeManageRoom();
            alert('Room updated.');
            reloadData();
        })
        .fail(function () {
            alert('Unable to update room, please try again later.');
        });
}