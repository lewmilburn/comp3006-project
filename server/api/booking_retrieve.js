module.exports = function (server, database) {
    server.get("/api/booking", function(request, response) {
        let roomNumber;
        let userID;

        if (request.query.userID === undefined) {
            userID = false;
        } else {
            userID = request.query.userID;
        }

        if (request.query.roomNumber === undefined) {
            roomNumber = false;
        } else {
            roomNumber = request.query.roomNumber;
        }

        if (roomNumber === false && userID === false) {
            console.log('[API][400] /requests/room')
            response.status(400).send('Bad request');
        } else {
            require('../functions/database/booking_retrieve')(database, roomNumber, userID).then(r => {
                if (r === null) {
                    console.log('[API][404] /requests/room')
                    response.status(404).send('Not found');
                } else {
                    console.log('[API][200] /requests/room')
                    response.setHeader('Content-Type', 'application/json');
                    response.send(r);
                }
            });
        }
    });
}