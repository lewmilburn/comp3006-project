module.exports = function (server, database) {
    server.post("/api/deleteuser", async function(request, response) {
        let id = request.body.id;
        let token = request.body.token;

        id = require('../functions/escape.js')(id)

        require('../functions/database/user_delete')(database,id,token);

        console.log('[API][200] /api/deleteuser');
        response.status(200).send('Success');
    });
}