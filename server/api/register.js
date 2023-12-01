const {genSalt, hash} = require('bcryptjs');
const {ObjectId} = require("mongodb");
module.exports = function (server, database) {
    server.post("/api/register", function(request, response) {
        let email = request.body.email;
        let password = request.body.password;
        let name = request.body.name;

        name = require('../functions/escape.js')(name)
        email = require('../functions/escape.js')(email)

        hashPassword(password).then(hashedPassword => {
            registerUser(database, email, hashedPassword, name).then(r => {
                if (r) {
                    console.log('[API][S201] /api/register');
                    response.status(201).send('Created');
                } else {
                    console.log('[API][S409] /api/register');
                    response.status(409).send('Conflict');
                }
            });
        })
    });
}

async function hashPassword(password) {
    return await genSalt(1)
        .then(async salt => {
            return await hash(password, salt).then(hashed => {
                return hashed;
            });
        })
        .catch(err => console.error(err.message));
}

async function registerUser(client, email, password, name) {
    try {
        await client.connect();
        const database = client.db("COMP3006Hotel");
        const users = database.collection("users");

        const query = { 'email': email };
        const options = {};

        const cursor = users.find(query, options);
        if ((await users.countDocuments(query)) === 0) {
            await users.insertOne(
                {
                    email: email,
                    password: password,
                    name: name
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