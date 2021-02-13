const express = require("express");

const UsersController = require("./controller/UsersController");

const routes = express.Router();

routes.post("/users", UsersController.create);

module.exports = routes;
