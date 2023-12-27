function createRoom() {
    let type = $('#nr_type').val().trim();
    let room_number = $('#nr_room_number').val().trim();
    let floor_number = $('#nr_floor_number').val().trim();
    let max_guests = $('#nr_max_guests').val().trim();
    let price = $('#nr_price').val().trim();
    let description = $('#nr_description').val().trim();
    let image = $('#nr_image').val().trim();

    let url = location.protocol + '//' + location.host + ':8080/api/room';

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
            $('#nr_type').val('');
            $('#nr_room_number').val('');
            $('#nr_floor_number').val('');
            $('#nr_max_guests').val('');
            $('#nr_price').val('');
            $('#nr_description').val('');
            $('#nr_image').val('');
            window.location = '/manage';
        })
        .fail(function () {
            alert('Unable to create room, please try again later.');
        });
}