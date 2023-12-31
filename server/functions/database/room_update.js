module.exports = async function (client, type, room_number, floor, max_guests, price, description, image) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("rooms");

        const filter = {'room_number': room_number};

        const newValues = {
            type: type,
            room_number: room_number,
            floor: floor,
            max_guests: max_guests,
            price: price,
            description: description,
            image: image
        };

        await rooms.updateOne(filter, newValues)
        return true;
    } finally {
        await client.close();
    }
}