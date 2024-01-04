module.exports = function (server, database) {
    server.post("/api/room", function(request, response) {
        let id = request.body.id;
        let type = request.body.type;
        let room_number = request.body.room_number;
        let floor_number = request.body.floor_number;
        let max_guests = request.body.max_guests;
        let price = request.body.price;
        let description = request.body.description;
        let image = request.body.image;

        type = require('../functions/escape.js')(type)
        room_number = require('../functions/escape.js')(room_number)
        floor_number = require('../functions/escape.js')(floor_number)
        max_guests = require('../functions/escape.js')(max_guests)
        price = require('../functions/escape.js')(price)
        description = require('../functions/escape.js')(description)

        require('../functions/database/room_update')(database, id, type, room_number, floor_number, max_guests, price, description, image).then(r => {
            if (r) {
                console.log('[API][200] /requests/room');
                response.status(200).send('Updated');
            } else {
                console.log('[API][404] /requests/room');
                response.status(404).send('Not Found');
            }
        });
    });
}