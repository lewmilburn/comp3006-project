module.exports = async function(client, room_number) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("rooms");

        const query = { 'room_number': room_number };

        rooms.deleteOne(query);

        return (await rooms.countDocuments(query)) === 0;
    } finally {
        await client.close();
    }
}