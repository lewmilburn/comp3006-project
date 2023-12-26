module.exports = async function(client, roomNumber) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("rooms");

        const query = { 'room_number': roomNumber};
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