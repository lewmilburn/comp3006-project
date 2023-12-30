module.exports = async function (client, user_id, room_number, start_date, end_date) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("bookings");

        const newBooking = {
            user_id: user_id,
            room_number: room_number,
            start_date: start_date,
            end_date: end_date
        };

        await rooms.insertOne(newBooking);
        return true;
    } finally {
        await client.close();
    }
}