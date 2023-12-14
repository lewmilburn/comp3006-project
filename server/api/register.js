const {genSalt, hash} = require('bcryptjs');
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
                    console.log('[API][201] /api/register');
                    response.status(201).send('Created');
                } else {
                    console.log('[API][409] /api/register');
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
    return hashPassword(name).then(token => {
        return doRegister(client, email, password, name, token);
    });
}

async function doRegister(client, email, password, name, token) {
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
                    token: token
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