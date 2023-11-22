let serverPort = 8080;
let webSocketPort = 8081;

let express = require("express");
let path = require("path");
let server = express();
let cors = require("cors");
let http = require("http");
let socketIo = require("socket.io");

server.use(cors());
server.disable("x-powered-by"); // security risk

let webSocketServer = http.createServer();
let io = socketIo(webSocketServer);

io.on("connection", function (socket) {
    // When a connection is received, emit a "confirm
    // connection" event to the client.
    socket.emit("confirm connection", "Connected...");
    socket.on("request", function (msg) {
        // When a message is received from a client, log it
        // on the console and emit a response.
        console.log("Responding to client " + msg);
        socket.emit("response", "Hello from the server");
    });
    socket.on("send message", function (msg) {
        console.log("Received message '"+msg+"'");
        socket.broadcast.emit("send message", msg);
    });
});

webSocketServer.listen(webSocketPort, () => {
    console.log("Listening on "+webSocketPort);
});

server.get("/status", function(request, response) {
    response.send('{"status":200}');
});

server.set("views", path.join(__dirname, "/views"));
server.set("view engine", "ejs");
server.engine('ejs', require('ejs').__express);

server.get("/", function(request, response) {
    response.send('{"status":200}');
});

server.listen(serverPort, function() {
    console.log("Listening on " + serverPort);
});