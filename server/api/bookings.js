module.exports = function (server) {
    server.get("/api/bookings", function(request, response) {
        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.parse('[{"id":1,"user":1,"room":1,"start_date":"2023-11-30","end_date":"2023-12-02"}]'));
    });
}