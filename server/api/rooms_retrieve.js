module.exports = function (server, database) {
    server.get("/api/rooms", function(request, response) {
        getAllRooms(database).then(r => {
            if (r === null) {
                console.log('[API][404] /requests/rooms')
                response.status(404).send('Not found');
            } else {
                console.log('[API][200] /requests/rooms')
                response.setHeader('Content-Type', 'application/json');
                response.send(r);
            }
        });
    });
}

async function getAllRooms(client) {
    return await require('../functions/database/rooms_retrieve.js')(client);
}