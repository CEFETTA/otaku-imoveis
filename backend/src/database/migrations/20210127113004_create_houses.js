
exports.up = function(knex) {
  return knex.schema.createTable("houses", function (table) {
    table.uuid("id").primary();
    table.decimal("rooms").notNullable();
    table.decimal("suites").notNullable();
    table.decimal("living_rooms").notNullable();
    table.decimal("parking_spaces").notNullable();
    table.decimal("area").notNullable();
    table.boolean("has_wardrobe").notNullable();
    table.text("description").notNullable();
    table.decimal("rent").notNullable();

    table.string("address").notNullable();
    table.string("number").notNullable();
    table.string("complement");
    table.string("neighborhood").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("cep").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("houses");
};
