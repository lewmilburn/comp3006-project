const {ObjectId} = require("mongodb");
module.exports = async function(client, id, token) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const users = database.collection("users");
        const query = { '_id': ObjectId.createFromHexString(id), 'token': token };
        console.log(query);
        const options = {};

        const cursor = users.deleteOne(query, options);
        if ((await users.countDocuments(query)) === 0) {
            console.log('Not found.');
            return false;
        } else {
            return true;
        }
    } finally {
        await client.close();
    }
}