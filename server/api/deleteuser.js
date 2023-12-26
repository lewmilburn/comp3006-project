module.exports = function (server, database) {
    server.post("/api/deleteuser", function(request, response) {
        let id = request.body.id;
        let token = request.body.token;

        id = require('../functions/escape.js')(id)

        let res = require('../functions/database/user_delete')(database,id,token);

        if (res) {
            console.log('[API][200] /api/deleteuser');
            response.status(200).send('Success');
            response.send(JSON.parse('{"status":200}'));
        } else {
            console.log('[API][404] /api/deleteuser');
            response.status(404).send('Not Found');
            response.send(JSON.parse('{"status":404}'));
        }
    });
}