let serverPort = 8080;
let webSocketPort = 6436;
const dotenv = require("dotenv");

console.log("[STARTUP][1/4] Loading configuration...");
dotenv.config();

// Start API
console.log("[STARTUP][2/4] Starting API...");
let server = require('./startup/api.js')(serverPort);
// Start WebSocket
console.log("[STARTUP][3/4] Starting WebSocket...");
require('./startup/socket.js')(webSocketPort);
// Start database
console.log("[STARTUP][4/4] Starting Database...");
require ('./startup/database.js')(process.env.DB_CONN_STRING);
console.log("[STARTUP] Done");

// Routing
require('./api/status.js')(server);
require('./api/rooms.js')(server);
require('./api/bookings.js')(server);