function requestAll() {
    return new Promise((success, error) => {
        let xmlHttp = new XMLHttpRequest();
        let url = location.protocol + '//' + location.host + ':8080/api/rooms';

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
    for (const room of rooms) {
        $("#roomList").append("<a href='/room/"+room.room_number+"' class='card-neutral'><div class='card-image' style='background-image: url("+room.image+")'></div><div class='card-content'>"+room.type+" room on the floor "+room.floor+" for £"+room.price+"/night</div></a>")
    }
}