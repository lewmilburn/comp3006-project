let express = require("express");
let path = require("path");
let app = express();
let port = 80;

app.disable("x-powered-by"); // security risk
app.get("/hello", function(request, response) {
    response.send("Hello World");
});

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.engine('ejs', require('ejs').__express);

app.use(express.static(path.join(__dirname, "files")));

app.get("/", function(request, response) {
    response.render("homepage");
});

app.listen(port, function() {
    console.log("Listening on " + port);
});