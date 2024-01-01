module.exports = function (server, database) {
    server.get("/api/room", function(request, response) {
        require ('../functions/database/room_retrieve')(database, request.query.roomNumber).then(r => {
            if (r === null) {
                console.log('[API][404] /requests/room')
                response.status(404).send('Not found');
            } else {
                console.log('[API][200] /requests/room')
                response.setHeader('Content-Type', 'application/json');
                response.send(r);
            }
        });
    });
}