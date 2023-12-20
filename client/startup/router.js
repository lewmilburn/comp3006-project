module.exports = function (client) {
    client.get("/", function(request, response) {
        response.render("homepage");
    });
    client.get("/room/*", function(request, response) {
        response.render("room");
    });
    client.get("/room", function(request, response) {
        response.render("homepage");
    });
    client.get("/login", function(request, response) {
        response.render("login");
    });
    client.get("/logout", function(request, response) {
        response.render("logout");
    });
    client.get("/register", function(request, response) {
        response.render("register");
    });
    client.get("/account", function(request, response) {
        response.render("account");
    });
    client.get("/offline", function(request, response) {
        response.render("offline");
    });
    client.get("/404", function(request, response) {
        response.render("404");
    });
}