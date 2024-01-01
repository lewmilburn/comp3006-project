function displayBookingsList(data) {
    let existingList = $('#bookingsList');
    existingList.empty();

    data.forEach(item => {
        let bookingItem = document.createElement('li');

        bookingItem.textContent = `Room ${item.room_number} - from ${item.start_date} to ${item.end_date}`;
        bookingItem.className = 'btn-neutral cursor-pointer';
        bookingItem.onclick = function() {
            displayManageBooking(item._id);
        };

        existingList.append(bookingItem);
    });

    return existingList;
}

function getUserBookings() {
    return new Promise((success, error) => {
        let xmlHttp = new XMLHttpRequest();
        let url = location.protocol + '//' + location.host + ':8080/api/booking?userID='+localStorage.getItem('id');

        xmlHttp.open("GET", url, true);
        xmlHttp.send();

        xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    const responseData = JSON.parse(xmlHttp.responseText);

                    success(responseData);
                } else {
                    error(this.status);
                }
            }
        };
    });
}

function displayManageBooking(id) {
    $('#manageBooking').removeClass('hidden');

    $('#deleteBookingId').addClass(id);
}

function startDeleteBooking() {
    let id = document.getElementById('deleteBookingId').classList[0];

    document.getElementById('deleteBookingId').classList.remove(
        document.getElementById('deleteBookingId').classList[0]
    );

    deleteBooking(id);
}