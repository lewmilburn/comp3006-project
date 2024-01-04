async function requestRoomData(roomNumber) {
    return new Promise((success, error) => {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                success(JSON.parse(xmlHttp.responseText));
            } else if (this.readyState === 4 && this.status === 404) {
                error('404');
                window.location = '/404';
            }
        };
        let url = SETTINGS.API_URL + '/api/room?roomNumber='+roomNumber;

        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    });
}

function displayData(response) {
    $('#type').text(response[0].type);
    $('#guests').text(response[0].max_guests);
    $('#roomNumber').text(response[0].room_number);
    $('#price').text(response[0].price);
    $('#description').text(response[0].description);
    $('#max_guests').text(response[0].max_guests);
}