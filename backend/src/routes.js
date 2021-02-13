const express = require("express");

const UsersController = require("./controller/UsersController");
const SessionsController = require("./controller/SessionsController");

const routes = express.Router();

routes.post("/users", UsersController.create);

routes.post("/sessions", SessionsController.create);

module.exports = routes;
