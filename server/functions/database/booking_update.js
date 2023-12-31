const {ObjectId} = require("mongodb");
module.exports = async function (client, id, user_id, room_number, start_date, end_date) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("bookings");

        const filter = {'_id': ObjectId.createFromHexString(id)};
        const newValues = {
            user_id: user_id,
            room_number: room_number,
            start_date: start_date,
            end_date: end_date
        };

        await rooms.updateOne(filter, newValues);
        return true;
    } finally {
        await client.close();
    }
}