module.exports = function (server, database) {
    server.get("/api/rooms", function(request, response) {
        response.setHeader('Content-Type', 'application/json');
        getAllRooms(database).then(r => {
            response.send(r);
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
            console.log("No documents found!");
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