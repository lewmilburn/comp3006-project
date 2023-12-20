module.exports = function (server, database) {
    server.get("/api/rooms", function(request, response) {
        getAllRooms(database).then(r => {
            if (r === null) {
                console.log('[API][404] /api/rooms')
                response.status(404).send('Not found');
            } else {
                console.log('[API][200] /api/rooms')
                response.setHeader('Content-Type', 'application/json');
                response.send(r);
            }
        });
    });
}

async function getAllRooms(client) {
    return await require('../functions/database/rooms_retrieve.js')(client);
}