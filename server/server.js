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
console.log("[STARTUP][5/5] Starting Router...");
require('./api/status.js')(server);
require('./api/rooms.js')(server, database);
require('./api/room.js')(server, database);
require('./api/bookings.js')(server);
require('./api/register.js')(server, database);
require('./api/login.js')(server, database);
console.log("[STARTUP] Done");