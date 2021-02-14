const express = require("express");

const { ensureAuthenticated } = require("./middlewares/ensureAuthenticated");

const UsersController = require("./controller/UsersController");
const SessionsController = require("./controller/SessionsController");
const NeighborhoodsController = require("./controller/NeighborhoodsController");
const HousesController = require("./controller/HousesController");
const ApartmentsController = require("./controller/ApartmentsController");

const routes = express.Router();

routes.post("/users", UsersController.create);

routes.post("/sessions", SessionsController.create);

routes.use(ensureAuthenticated);

routes.post("/neighborhoods", NeighborhoodsController.create);
routes.get("/neighborhoods", NeighborhoodsController.index);
routes.delete("/neighborhoods/:neighborhood_id", NeighborhoodsController.delete);

routes.post("/houses", HousesController.create);
routes.get("/houses/:house_id", HousesController.show);
routes.get("/houses", HousesController.index);
routes.delete("/houses/:house_id", HousesController.delete);

routes.post("/apartments", ApartmentsController.create);
routes.get("/apartments/:apartment_id", ApartmentsController.show);
routes.get("/apartments", ApartmentsController.index);
routes.delete("/apartments/:apartment_id", ApartmentsController.delete);

module.exports = routes;
