function requestAll() {
    return new Promise((success, error) => {
        let xmlHttp = new XMLHttpRequest();
        let url = SETTINGS.API_URL + '/api/rooms';

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

function displayAll(rooms) {
    $("#roomList").empty();
    for (const room of rooms) {
        $("#roomList").append("<a href='/room/"+room.room_number+"' class='card-neutral'><div class='card-image' style='background-image: url("+room.image+")'></div><div class='card-content'><h3>Room "+room.room_number+"</h3>"+room.type+" room on the floor "+room.floor+" for £"+room.price+"/night</div></a>")
    }
}