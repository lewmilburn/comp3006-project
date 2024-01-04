
    let ci = 0;
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
        ci = 0;
        websocketStatus('Connected');
        clientConnected();
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
        ci++;
        websocketStatus("Can't connect, retrying (attempt "+(ci)+"/10)...");
        if (ci === 9) {
            clientOffline();
        }
    });

    function socketUpdateRoom() {
        socket.emit('update-room');
    }

    function socketUpdateBookings() {
        socket.emit('update-room');
    }