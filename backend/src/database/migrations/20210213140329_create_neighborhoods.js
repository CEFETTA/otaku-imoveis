
exports.up = function(knex) {
  return knex.schema.createTable("neighborhoods", function (table) {
    table.uuid("id").primary();
    table.string("neighborhood").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("neighborhoods");
};
