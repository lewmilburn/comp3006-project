const bcryptjs = require('bcryptjs');
module.exports = function (server, database) {
    server.post("/api/login", function(request, response) {
        let email = request.body.email;
        let password = request.body.password;

        email = require('../functions/escape.js')(email)

        getPassword(database, email).then(user => {
            bcryptjs.compare(password, user.password, function (err, result) {
                if (result) {
                    console.log('[API][201] /api/login');
                    response.send(JSON.parse('{"id":"'+user._id+'","email":"'+user.email+'","name":"'+user.name+'","token":"'+user.token+'"}'));
                } else {
                    console.log('[API][401] /api/login');
                    response.status(401).send('Unauthorised');
                }
            });
        });
    });
}

async function getPassword(client, email) {
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