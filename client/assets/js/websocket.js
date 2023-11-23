$(function () {
    let i = 0;
    const socket = io('ws://localhost:6436', {
        reconnectionDelay: 1000,
        reconnection: true,
        reconnectionAttempts: 9,
        transports: ['websocket'],
        agent: false,
        upgrade: false,
        rejectUnauthorized: false
    });

    socket.on("confirm connection", function (msg) {
        i = 0;
        console.log(msg);
        websocketStatus('Connected');
        clientConnected();
    });
    socket.on("send message", function (msg) {
        console.log(msg);
    });
    socket.on("disconnect", (reason) => {
        if (reason === "io server disconnect") {
            console.log("[WS] Disconnected - attempting reconnect...")
            socket.connect();
        }
    });
    socket.on("connect_error", function (err) {
        if (connections >= 2) {
            clientDisconnectedMidRun();
        }
        console.log("[WS] Can't connect '"+err+"'");
        i++;
        websocketStatus("Can't connect, retrying (attempt "+(i)+"/10)...");
        if (i === 9) {
            clientOffline();
        }
    });
    socket.emit("request", "Hello from the client");

    $("#send").on( "click", function() {
        let input = $("#msg");
        socket.emit("send message", input.val());
        appendMessage(input.val(), 'message sent');
        input.val("");
    });
});