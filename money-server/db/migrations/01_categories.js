exports.up = function(knex, Promise) {
  return knex.schema.createTable("categories", table => {
    table.increments();
    table.string("name");
  });
};
exports.down = function(knex, Promise) {};
