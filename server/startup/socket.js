let http = require("http");
let socketIo = require("socket.io");
module.exports = function(webSocketPort) {
    let webSocketServer = http.createServer();
    let io = socketIo(webSocketServer);

    io.on("connection", function (socket) {
        console.log('[WS][200] User connection started.');
        socket.emit("ping");

        socket.on("update-booking", function () {
            console.log("[WS] Received booking update ping.");
            socket.broadcast.emit("update-booking");
        });
        socket.on("update-room", function () {
            console.log("[WS] Received room update ping.");
            socket.broadcast.emit("update-room");
        });
    });

    webSocketServer.listen(webSocketPort, () => {
        console.log("[WS] Listening on "+webSocketPort);
    });
}