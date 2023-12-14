let express = require("express");
let client = express();
let port = 80;



console.log("[STARTUP][1/3] Setting up...");
require('./startup/setup.js')(client);

console.log("[STARTUP][2/3] Starting Router...");
require('./startup/router.js')(client);

client.listen(port, function() {
    console.log("[STARTUP][3/3] Listening on port " + port);
    console.log("[STARTUP] Done");
});