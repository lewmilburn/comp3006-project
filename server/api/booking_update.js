module.exports = function (server, database) {
    server.post("/api/booking", function(request, response) {
        let id = request.body.id;
        let start_date = request.body.start_date;
        let end_date = request.body.end_date;

        require('../functions/database/booking_update')(database, id, start_date, end_date).then(r => {
            if (r) {
                console.log('[API][200] /requests/booking');
                response.status(201).send('Created');
            } else {
                console.log('[API][404] /requests/booking');
                response.status(404).send('Not Found');
            }
        });
    });
}