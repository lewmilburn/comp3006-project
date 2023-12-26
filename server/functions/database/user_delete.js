const {ObjectId} = require("mongodb");
module.exports = async function(client, id, token) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const users = database.collection("users");
        const query = { '_id': ObjectId.createFromHexString(id), 'token': token };
        console.log(query);
        const options = {};

        users.deleteOne(query, options);
        return (await users.countDocuments(query)) !== 0;
    } finally {
        await client.close();
    }
}