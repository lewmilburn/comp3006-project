async function getRoomBookings(room_number) {
    return new Promise((success, error) => {
        let xmlHttp = new XMLHttpRequest();

        let url = SETTINGS.API_URL + '/api/booking?roomNumber='+room_number;

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