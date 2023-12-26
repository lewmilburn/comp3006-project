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
        return require('../functions/database/user_create')(client, email, password, name, token);
    });
}