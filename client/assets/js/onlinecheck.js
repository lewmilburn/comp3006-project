let connections = 0;

function checkOnline() {
    let request = $.get(SETTINGS.API_URL+'/status');

    serverStatus('Checking...');

    request.done(function() {
        serverStatus('Online.');
        clientConnected();
    });

    request.fail(function() {
        clientOffline();
    });
}

function clientOffline() {
    window.location = '/offline';
}

function clientConnected() {
    connections++;
    if (connections >= 2) {
        document.getElementById('serviceStatus').innerHTML = 'Connected.';
        $("#connectionScreen").css("display", "none");
    }
}

function clientDisconnectedMidRun() {
    let selector = $("#connectionScreen");
    if (!selector.hasClass("bg-red-100")) {
        document.getElementById('serviceStatus').innerHTML = 'Disconnected.';
        selector.css("display", "block");
        selector.addClass("bg-red-100");
    }
}

function serverStatus(status) {
    document.getElementById('statusServer').innerHTML = status;
}

function websocketStatus(status) {
    document.getElementById('statusWebsocket').innerHTML = status;
}