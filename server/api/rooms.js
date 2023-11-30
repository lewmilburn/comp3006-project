module.exports = function (server) {
    server.get("/api/rooms", function(request, response) {
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.parse('[{"id":1, "price": "30"}]'));
    });
}