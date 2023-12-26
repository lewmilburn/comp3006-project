module.exports = async function(client, email) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const users = database.collection("users");

        const query = { 'email': email };
        const options = {};

        const cursor = users.find(query, options);
        if ((await users.countDocuments(query)) === 0) {
            return false;
        } else {
            let arr = [];
            let i = 0;
            for await (const doc of cursor) {
                arr[i] = doc;
                i++;
            }
            return arr[0];
        }
    } finally {
        await client.close();
    }
}