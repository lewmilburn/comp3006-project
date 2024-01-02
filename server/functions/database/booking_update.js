const {ObjectId} = require("mongodb");
module.exports = async function (client, id, start_date, end_date) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("bookings");

        const filter = {'_id': ObjectId.createFromHexString(id)};
        const newValues = { $set: {
            start_date: start_date,
            end_date: end_date
        }};

        return await rooms.updateOne(filter, newValues);
    } finally {
        await client.close();
    }
}