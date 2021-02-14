const express = require("express");

const { ensureAuthenticated } = require("./middlewares/ensureAuthenticated");

const UsersController = require("./controller/UsersController");
const SessionsController = require("./controller/SessionsController");
const NeighborhoodsController = require("./controller/NeighborhoodsController");
const HousesController = require("./controller/HousesController");

const routes = express.Router();

routes.post("/users", UsersController.create);

routes.post("/sessions", SessionsController.create);

routes.use(ensureAuthenticated);

routes.post("/neighborhoods", NeighborhoodsController.create);
routes.get("/neighborhoods", NeighborhoodsController.index);

routes.post("/houses", HousesController.create);
routes.get("/houses/:house_id", HousesController.show);

module.exports = routes;
