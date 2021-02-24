const express = require("express");
const multer = require("multer");

const uploadConfig = require("./config/upload");

const { ensureAuthenticated } = require("./middlewares/ensureAuthenticated");

const UsersController = require("./controller/UsersController");
const SessionsController = require("./controller/SessionsController");
const NeighborhoodsController = require("./controller/NeighborhoodsController");
const HousesController = require("./controller/HousesController");
const ApartmentsController = require("./controller/ApartmentsController");
const VisitsController = require("./controller/VisitsController");

const upload = multer(uploadConfig.multer);

const routes = express.Router();

routes.post("/users", UsersController.create);

routes.post("/sessions", SessionsController.create);

routes.get("/neighborhoods", NeighborhoodsController.index);

routes.get("/houses/:house_id", HousesController.show);
routes.get("/houses", HousesController.index);

routes.get("/apartments/:apartment_id", ApartmentsController.show);
routes.get("/apartments", ApartmentsController.index);

routes.use(ensureAuthenticated);

routes.post("/neighborhoods", NeighborhoodsController.create);
routes.delete("/neighborhoods/:neighborhood_id", NeighborhoodsController.delete);

routes.post("/houses", HousesController.create);
routes.delete("/houses/:house_id", HousesController.delete);

routes.post("/apartments", ApartmentsController.create);
routes.delete("/apartments/:apartment_id", ApartmentsController.delete);

routes.post("/visits", VisitsController.create);
routes.get("/visits", VisitsController.index);
routes.delete("/visits/:visit_id", VisitsController.delete);

routes.post(
  '/upload',
  upload.single('file'),
  async (request, response) => {
    return response.json({ filename: request.file.filename });
  },
);

module.exports = routes;
