const {ObjectId} = require("mongodb");
module.exports = async function (client, id, email, password, name) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const users = database.collection("users");

        const filter = {'_id': ObjectId.createFromHexString(id)};
        const newValues = {
            $set: {
                email: email,
                password: password,
                name: name
            }
        };

        await users.updateOne(filter, newValues);
    } finally {
        await client.close();
    }
}