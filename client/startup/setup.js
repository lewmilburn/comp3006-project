const path = require("path");
const express = require("express");
module.exports = function (client) {
    client.disable("x-powered-by"); // security risk
    client.set("views", path.join(__dirname, "../views"));
    client.set("view engine", "ejs");
    client.engine('ejs', require('ejs').__express);

    client.use(express.static('assets'))
}