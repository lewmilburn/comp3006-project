module.exports = function (server, database) {
    server.post("/api/booking", function(request, response) {
        let id = request.body.id;
        let user_id = request.body.user_id;
        let room_id = request.body.room_id;
        let start_date = request.body.start_date;
        let end_date = request.body.end_date;

        require('../functions/database/booking_update')(database, id, user_id, room_id, start_date, end_date).then(r => {
            if (r) {
                console.log('[API][200] /api/booking');
                response.status(201).send('Created');
            } else {
                console.log('[API][404] /api/booking');
                response.status(404).send('Not Found');
            }
        });
    });
}