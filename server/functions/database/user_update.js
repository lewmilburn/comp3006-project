const {ObjectId} = require("mongodb");
module.exports = async function (client, id, email, password, name, token) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const users = database.collection("users");

        const filter = {'_id': ObjectId.createFromHexString(id)};
        let newValues;
        if (password === false) {
            newValues = {
                $set: {
                    email: email,
                    name: name,
                    token: token
                }
            };
        } else {
            newValues = {
                $set: {
                    email: email,
                    password: password,
                    name: name,
                    token: token
                }
            };
        }

        await users.updateOne(filter, newValues);
    } finally {
        await client.close();
    }
}