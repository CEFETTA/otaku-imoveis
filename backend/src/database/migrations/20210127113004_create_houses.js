
exports.up = function(knex) {
  return knex.schema.createTable("houses", function (table) {
    table.uuid("id").primary();
    table.uuid("user_id").notNullable();
    table.decimal("rooms").notNullable();
    table.decimal("suites").notNullable();
    table.decimal("living_rooms").notNullable();
    table.decimal("parking_spaces").notNullable();
    table.decimal("area").notNullable();
    table.boolean("has_wardrobe").notNullable();
    table.text("description");
    table.decimal("rental_price").notNullable();

    table.string("address").notNullable();
    table.string("number").notNullable();
    table.string("complement");
    table.uuid("neighborhood_id").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("cep").notNullable();

    table.foreign("user_id").references("id").inTable("users");
    table.foreign("neighborhood_id").references("id").inTable("neighborhoods");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("houses");
};
