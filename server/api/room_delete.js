module.exports = function (server, database) {
    server.post("/api/deleteroom", function(request, response) {
        let room_number = request.body.room_number;

        if (room_number === '' || room_number === null || room_number === undefined) {
            console.log('[API][400] /api/deleteroom');
            response.status(400).send('Bad Request');
            return;
        }

        room_number = require('../functions/escape.js')(room_number)

        require('../functions/database/room_delete')(database, room_number).then(r => {
            if (r) {
                console.log('[API][200] /api/deleteroom');
                response.status(200).send('Success');
            } else {
                console.log('[API][404] /api/deleteroom');
                response.status(404).send('Not Found');
            }
        });
    });
}