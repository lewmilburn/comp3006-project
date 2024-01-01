let serverPort = 8080;
let webSocketPort = 6436;
const dotenv = require("dotenv");

console.log("[STARTUP][1/5] Loading configuration...");
dotenv.config();

// Start API
console.log("[STARTUP][2/5] Starting API Server...");
let server = require('./startup/api.js')(serverPort);
// Start WebSocket
console.log("[STARTUP][3/5] Starting WebSocket Server...");
require('./startup/socket.js')(webSocketPort);
// Start database
console.log("[STARTUP][4/5] Starting Database...");
let database = require ('./startup/database.js')(process.env.DB_CONN_STRING);

// Routing
console.log("[STARTUP][5/5] Starting Router (1/4 - Status)");
require('./api/status.js')(server);

console.log("[STARTUP][5/5] Starting Router (2/4 - Rooms)");
require('./api/rooms_retrieve.js')(server, database);
require('./api/room_create.js')(server, database);
require('./api/room_retrieve.js')(server, database);
require('./api/room_update.js')(server, database);
require('./api/room_delete.js')(server, database);

console.log("[STARTUP][5/5] Starting Router (3/4 - Bookings)");
require('./api/booking_create.js')(server, database);
require('./api/booking_retrieve.js')(server, database);
require('./api/booking_update.js')(server, database);
require('./api/booking_delete.js')(server, database);

console.log("[STARTUP][5/5] Starting Router (4/4 - Users)");
require('./api/user_create.js')(server, database);
require('./api/user_retrieve.js')(server, database);
require('./api/user_update.js')(server, database);
require('./api/user_delete.js')(server, database);

console.log("[STARTUP][5/5] Starting Router (Done)");

console.log("[STARTUP] Done");

module.exports = server;