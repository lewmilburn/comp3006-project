const {genSalt, hash} = require('bcryptjs');
module.exports = function (server, database) {
    server.post("/api/user", function(request, response) {
        let id = request.body.id;
        let email = request.body.email;
        let name = request.body.name;

        let password;

        if (request.body.password === undefined) {
            password = false;
        } else {
            password = request.body.password;
        }

        name = require('../functions/escape.js')(name)
        email = require('../functions/escape.js')(email)

        if (password === false) {
            updateUser(database, id, email, password, name).then(r => {
                if (r) {
                    console.log('[API][201] /requests/user');
                    response.status(201).send('Created');
                } else {
                    console.log('[API][404] /requests/booking');
                    response.status(404).send('Not Found');
                }
            });
        } else {
            hashPassword(password).then(hashedPassword => {
                updateUser(database, id, email, hashedPassword, name).then(r => {
                    if (r) {
                        console.log('[API][201] /requests/user');
                        response.status(201).send('Created');
                    } else {
                        console.log('[API][404] /requests/user');
                        response.status(404).send('Not Found');
                    }
                });
            });
        }
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

async function updateUser(client, id, email, password, name) {
    return hashPassword(name).then(token => {
        return require('../functions/database/user_update')(client, id, email, password, name, token);
    });
}