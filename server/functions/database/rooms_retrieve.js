module.exports = async function (client) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const rooms = database.collection("rooms");

        const query = {};

        const cursor = rooms.find(query);
        if ((await rooms.countDocuments(query)) === 0) {
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
};