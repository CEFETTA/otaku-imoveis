
exports.up = function(knex) {
  return knex.schema.createTable("visits", function (table) {
    table.uuid("id").primary();
    table.uuid("user_id").notNullable();
    table.uuid("apartment_id");
    table.uuid("house_id");
    table.timestamp("scheduled_to").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now())

    table.foreign("user_id").references("id").inTable("users");
    table.foreign("apartment_id").references("id").inTable("apartments");
    table.foreign("house_id").references("id").inTable("houses");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("visits");
};
