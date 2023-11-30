const path = require("path");
const cors = require("cors");
let express = require("express");
let server = express();
module.exports = function(serverPort) {
    server.use(cors());
    server.disable("x-powered-by"); // security risk

    server.set("views", path.join(__dirname, "/views"));
    server.set("view engine", "ejs");
    server.engine('ejs', require('ejs').__express);

    server.listen(serverPort, function() {
        console.log("[API] Listening on " + serverPort);
    });

    return server;
}