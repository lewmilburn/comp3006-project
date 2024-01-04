function deleteRoomRequest(room_number) {
    room_number = room_number.trim();

    let url = SETTINGS.API_URL + '/api/deleteroom';

    $.ajax({
        url: url,
        type: 'POST',
        data: { room_number: room_number },
        success: function() {
            alert('Room deleted.');
            socketUpdateRoom();
        },
        error: function (xhr, status, error) {
            console.log('Request failed:', xhr, status, error);
            console.log('Room number:', room_number);
            console.log('URL:', url);
            alert('Unable to delete room, please try again later. Error: '+xhr.statusText);
        }
    });
}