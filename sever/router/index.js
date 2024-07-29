const express = require("express");

const hotels = require('./hotels');
const users = require('./users');
const home = require('./home');
const rooms = require('./room');
const auth = require('./authen');
function router (app) {
// Routes
    app.use("/api", hotels );
    app.use("/users", users );
    app.use("/rooms", rooms );
    app.use("/auth", auth );
    app.use("/", home );
}

module.exports = router;