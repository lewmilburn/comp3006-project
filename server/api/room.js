const {ObjectId} = require("mongodb");
module.exports = function (server, database) {
    server.get("/api/room", function(request, response) {
        getAllRooms(database, request.query.id).then(r => {
            if (r === null) {
                console.log('[API][S404] /api/room')
                response.status(404).send('Not found');
            } else {
                console.log('[API][S200] /api/room')
                response.setHeader('Content-Type', 'application/json');
                response.send(r);
            }
        });
    });
}

async function getAllRooms(client, roomID) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("rooms");

        const query = { '_id': new ObjectId(roomID)};
        const options = {};

        const cursor = rooms.find(query, options);
        if ((await rooms.countDocuments(query)) === 0) {
            return null;
        }

        let arr = [];
        let i = 0;
        for await (const doc of cursor) {
            arr[i] = doc;
            i++;
        }
        return arr;
    } finally {
        await client.close();
    }
}