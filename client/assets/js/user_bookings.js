function displayBookingsList(data) {
    let existingList = $('#bookingsList');
    existingList.empty();

    data.forEach(item => {
        let bookingItem = document.createElement('li');

        bookingItem.textContent = `Room ${item.room_number} - from ${item.start_date} to ${item.end_date}`;
        bookingItem.className = 'btn-neutral cursor-pointer';
        bookingItem.onclick = function() {
            goToRoom(item.room_number);
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
                    error(new Error(`Request failed with status: ${this.status}`));
                }
            }
        };
    });
}

function goToRoom(number) {
    window.location = '/room/'+number;
}