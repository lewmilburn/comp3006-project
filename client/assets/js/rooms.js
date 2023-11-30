function requestAll() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            displayAll(JSON.parse(xmlHttp.responseText));
        }
    };
    let url = location.protocol + '//' + location.host + ':8080/api/rooms';

    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function displayAll(rooms) {
    for (const room of rooms) {
        $("#roomList").append("<div class='card-neutral'><div class='card-image' style='background-image: url("+room.image+")'></div><div class='card-content'>"+room.type+" room on the floor "+room.floor+" for £"+room.price+"/night</div></div>")
    }
}