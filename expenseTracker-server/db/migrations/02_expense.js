exports.up = function(knex, Promise) {
  return knex.schema.createTable("expense", table => {
    table.increments(); // Creates id column
    table
      .integer("category_id")
      .references("id")
      .inTable("categories");
    table.float("money");
    table.date("date").defaultTo(knex.fn.now(1));
    table.string("content"); // Creates name column as varchar
    table.timestamps(true, true); // Creates created_at and updated_at columns to use as timestamps
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("expense");
};
