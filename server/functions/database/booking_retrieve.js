module.exports = async function(client, roomNumber, userID) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const bookings = database.collection("bookings");

        let query;

        if (userID === false) {
            query = { 'room_number': roomNumber};
        } else if (roomNumber === false) {
            query = { 'user_id': userID };
        } else {
            query = { 'room_number': roomNumber, 'user_id': userID };
        }
        const options = {};

        const cursor = bookings.find(query, options);
        if ((await bookings.countDocuments(query)) === 0) {
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