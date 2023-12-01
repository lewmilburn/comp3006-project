let express = require("express");
let path = require("path");
let client = express();
let port = 80;

client.disable("x-powered-by"); // security risk
client.get("/hello", function(request, response) {
    response.send("Hello World");
});

client.set("views", path.join(__dirname, "/views"));
client.set("view engine", "ejs");
client.engine('ejs', require('ejs').__express);

client.use(express.static('assets'))

client.get("/", function(request, response) {
    response.render("homepage");
});
client.get("/login", function(request, response) {
    response.render("login");
});
client.get("/register", function(request, response) {
    response.render("register");
});
client.get("/offline", function(request, response) {
    response.render("offline");
});

client.listen(port, function() {
    console.log("Listening on " + port);
});