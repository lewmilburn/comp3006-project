function displayList(data) {
    let existingList = $('#existingroomslist');
    existingList.empty();

    data.forEach(item => {
        let roomItem = document.createElement('li');

        roomItem.textContent = `Room ${item.room_number} (Type: ${item.type})`;
        roomItem.className = 'btn-neutral cursor-pointer';
        roomItem.onclick = function() {
            manageRoom(item);
        };

        existingList.append(roomItem);
    });

    return existingList;
}

function manageRoom(room) {
    $('#ur_type').val(room.type)
    $('#ur_room_number').val(room.room_number)
    $('#ur_floor_number').val(room.floor)
    $('#ur_max_guests').val(room.max_guests)
    $('#ur_price').val(room.price)
    $('#ur_description').val(room.description)
    $('#ur_image').val(room.image)

    $('#manageRoomForm').removeClass('hidden');
    $('#manageUpdateCloseBtn').removeClass('hidden');
    $('#existingroomslist').addClass('hidden');
}

function closeManageRoom() {
    $('#ur_type').val('')
    $('#ur_room_number').val('')
    $('#ur_floor_number').val('')
    $('#ur_max_guests').val('')
    $('#ur_price').val('')
    $('#ur_description').val('')
    $('#ur_image').val('')

    $('#manageRoomForm').addClass('hidden');
    $('#manageUpdateCloseBtn').addClass('hidden');
    $('#existingroomslist').removeClass('hidden');
}

function deleteRoom() {
    deleteRoomRequest($('#ur_room_number').val());

    closeManageRoom();

    reloadData();
}