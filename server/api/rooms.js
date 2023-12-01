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
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("rooms");

        const query = {};
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