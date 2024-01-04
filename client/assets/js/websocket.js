$(function () {
    let i = 0;
    const socket = io(SETTINGS.SOCKET_URL, {
        reconnectionDelay: 1000,
        reconnection: true,
        reconnectionAttempts: 9,
        transports: ['websocket'],
        agent: false,
        upgrade: false,
        rejectUnauthorized: false
    });

    socket.on("ping", function () {
        i = 0;
        websocketStatus('Connected');
        clientConnected();
    });
    socket.on("update-booking", function () {
        console.log('[WS] Update booking');
    });
    socket.on("update-room", function () {
        console.log('[WS] Update room');
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

    $("#updateRoomBtn").on( "click", function() {
        socket.emit("update-room");
    });

    $("#createBookingBtn").on( "click", function() {
        socket.emit("update-booking");
    });
});