const express = require("express");

const hotels = require('./hotels');
const users = require('./users');
const home = require('./home');
const rooms = require('./room');
const login = require('../utils/authen');
const VerifyAdmin = require('../utils/verifiToken');
function router (app) {
// Routes
    app.use("/api", hotels );
    app.use("/users", users );
    app.use("/rooms", rooms );
    app.use("/", login, VerifyAdmin, home );
}

module.exports = router;