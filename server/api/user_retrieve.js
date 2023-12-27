const bcryptjs = require('bcryptjs');
module.exports = function (server, database) {
    server.post("/api/login", function(request, response) {
        let email = request.body.email;
        let password = request.body.password;

        email = require('../functions/escape.js')(email)

        require ('../functions/database/user_retrieve')(database, email).then(user => {
            bcryptjs.compare(password, user.password, function (err, result) {
                if (result) {
                    console.log('[API][201] /api/login');
                    response.send(JSON.parse('{"id":"'+user._id+'","email":"'+user.email+'","name":"'+user.name+'","token":"'+user.token+'","role":"'+user.permissions+'"}'));
                } else {
                    console.log('[API][401] /api/login');
                    response.status(401).send('Unauthorised');
                }
            });
        });
    });
}