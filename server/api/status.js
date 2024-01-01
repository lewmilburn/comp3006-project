module.exports = function (server) {
    server.get("/status", function(request, response) {
        console.log('[API][200] /requests/status')
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.parse('{"status":200}'));
    });
}