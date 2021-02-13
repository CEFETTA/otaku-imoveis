
exports.up = function(knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").primary();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("role").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("houses");
};
