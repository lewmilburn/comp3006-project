module.exports = function (server, database) {
    server.post("/api/deletebooking", function(request, response) {
        let id = request.body.id;

        if (id === '' || id === null || id === undefined) {
            console.log('[API][400] /requests/booking/delete');
            response.status(400).send('Bad Request');
            return;
        }

        id = require('../functions/escape.js')(id)

        require('../functions/database/booking_delete')(database, id).then(r => {
            if (r) {
                console.log('[API][200] /requests/deleteroom');
                response.status(200).send('Success');
            } else {
                console.log('[API][404] /requests/deleteroom');
                response.status(404).send('Not Found');
            }
        });
    });
}