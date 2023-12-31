module.exports = function (server, database) {
    server.post("/api/newbooking", function(request, response) {
        let user_id = request.body.user_id;
        let room_id = request.body.room_id;
        let start_date = request.body.start_date;
        let end_date = request.body.end_date;

        require('../functions/database/booking_create')(database, user_id, room_id, start_date, end_date).then(r => {
            if (r) {
                console.log('[API][201] /api/newbooking');
                response.status(201).send('Created');
            } else {
                console.log('[API][409] /api/newbooking');
                response.status(409).send('Conflict');
            }
        });
    });
}