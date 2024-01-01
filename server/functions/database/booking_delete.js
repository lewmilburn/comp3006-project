const {ObjectId} = require("mongodb");
module.exports = async function(client, id) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const bookings = database.collection("bookings");

        const query = { '_id': ObjectId.createFromHexString(id) };

        bookings.deleteOne(query);

        return (await bookings.countDocuments(query)) === 0;
    } finally {
        await client.close();
    }
}