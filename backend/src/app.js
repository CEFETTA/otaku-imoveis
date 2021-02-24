const express = require("express");
const cors = require("cors");
// const { errors } = require("celebrate");

const uploadConfig = require("./config/upload");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(String(uploadConfig.uploadsFolder)));
app.use(routes);
// app.use(errors());


module.exports = app;
