const {ObjectId} = require("mongodb");
module.exports = async function (client, id, type, room_number, floor, max_guests, price, description, image) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("rooms");

        const filter = {'_id': ObjectId.createFromHexString(id)};

        const newValues = { $set: {
            type: type,
            room_number: room_number,
            floor: floor,
            max_guests: max_guests,
            price: price,
            description: description,
            image: image
        }};
        const options = {upsert: true};

        return await rooms.updateOne(filter, newValues, options);
    } finally {
        await client.close();
    }
}