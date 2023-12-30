module.exports = async function(client, room_number) {
    let queryOpen = false;
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("rooms");
        const query = { 'room_number': room_number };
        const options = {};
        queryOpen = true;
        return (await rooms.deleteOne(query, options));
    } finally {
        if (queryOpen) {
            await client.close();
        }
    }
}