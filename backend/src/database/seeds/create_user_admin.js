const hashProvider = require("../../providers/BCryptHashProvider");
const uuid = require("uuid");

exports.seed = function(knex) {
  return knex('users').del()
    .then(async function () {
      const id = uuid.v4();

      const password = await hashProvider.generateHash('admin');

      return knex('users').insert([
        {id, name: 'Admin', email: 'admin@admin.com', password, role: 'admin'},
      ]);
    });
};
