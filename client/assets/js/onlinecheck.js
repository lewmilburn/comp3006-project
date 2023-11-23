let connections = 0;

function checkOnline() {
    let request = $.get('http://localhost:8080/status');

    serverStatus('Checking...');

    request.done(function(result) {
        serverStatus('Online.');
        console.log(result);
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
        $("#connectionScreen").removeClass("bg-red-100");
        document.getElementById('serviceStatus').innerHTML = 'Connected.';
        setTimeout(
            function()
            {
                $("#connectionScreen").css("display", "none");
            }, 2000);
    }
}

function clientDisconnectedMidRun() {
    let selector = $("#connectionScreen");
    if (!selector.hasClass("bg-red-100")) {
        console.log("does not have class");
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