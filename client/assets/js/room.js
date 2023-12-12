function requestRoomData(roomNumber) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            displayData(JSON.parse(xmlHttp.responseText));
        } else if (this.readyState === 4 && this.status === 404) {
            window.location = '/404';
        }
    };
    let url = location.protocol + '//' + location.host + ':8080/api/room?roomNumber='+roomNumber;

    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function displayData(response) {
    console.log(response);
    $('#type').text(response[0].type);
    $('#guests').text(response[0].max_guests);
    $('#roomNumber').text(response[0].room_number);
    $('#price').text(response[0].price);
    $('#description').text(response[0].description);
    $('#max_guests').text(response[0].max_guests);
}