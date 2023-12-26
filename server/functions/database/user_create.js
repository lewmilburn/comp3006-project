module.exports = async function (client, email, password, name, token) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const users = database.collection("users");

        const query = {'email': email};
        const options = {};

        users.find(query, options);
        if ((await users.countDocuments(query)) === 0) {
            await users.insertOne(
                {
                    email: email,
                    password: password,
                    name: name,
                    token: token,
                    permissions: 0
                }
            )
            return true;
        } else {
            return false;
        }
    } finally {
        await client.close();
    }
}