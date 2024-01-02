module.exports = async function (client, user_id, room_number, start_date, end_date) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const bookings = database.collection("bookings");

        let overlap = false;

        let existingBookings = await require('./booking_retrieve')(client, room_number, false, true);

        const newStartDate = new Date(start_date);
        const newEndDate = new Date(end_date);

        for (let item in existingBookings) {
            const existingStartDate = new Date(existingBookings[item].start_date);
            const existingEndDate = new Date(existingBookings[item].end_date);

            if (newStartDate < existingEndDate && newEndDate > existingStartDate) {
                overlap = true;
                break;
            }
        }

        const newBooking = {
            user_id: user_id,
            room_number: room_number,
            start_date: start_date,
            end_date: end_date
        };


        if (overlap === false) {
            await bookings.insertOne(newBooking);
            return true;
        } else {
            return false;
        }
    } finally {
        await client.close();
    }
}