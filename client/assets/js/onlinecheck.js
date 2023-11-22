let connections = 0;

function checkOnline() {
    let request = $.get('http://localhost:8080');

    serverStatus('Attempting to connect...');

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
    if (connections === 2) {
        $("#connectionScreen").removeClass("bg-red-100");
        document.getElementById('serviceStatus').innerHTML = 'Connected.';
        setTimeout(
            function()
            {
                $("#connectionScreen").css("display", "none");
            }, 2000);
    }
}

function serverStatus(status) {
    document.getElementById('statusServer').innerHTML = status;
}

function websocketStatus(status) {
    document.getElementById('statusWebsocket').innerHTML = status;
}