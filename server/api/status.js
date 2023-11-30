module.exports = function (server) {
    server.get("/status", function(request, response) {
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.parse('{"status":200}'));
    });
}