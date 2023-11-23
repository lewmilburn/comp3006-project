let http = require("http");
let socketIo = require("socket.io");
module.exports = function(webSocketPort) {
    let webSocketServer = http.createServer();
    let io = socketIo(webSocketServer);

    io.on("connection", function (socket) {
        // When a connection is received, emit a "confirm
        // connection" event to the client.
        socket.emit("confirm connection", "[WS] Connected to WebSocket");
        socket.on("send message", function (msg) {
            console.log("[WS] Received message '"+msg+"'");
            socket.broadcast.emit("send message", msg);
        });
    });

    webSocketServer.listen(webSocketPort, () => {
        console.log("[WS] Listening on "+webSocketPort);
    });
}