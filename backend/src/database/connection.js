import knex from "knex";
import configuration from "../../knexfile";

const config = configuration.development;

const connection = knex(config);

module.exports = connection;
