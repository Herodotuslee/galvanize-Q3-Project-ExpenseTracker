exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { name: "Rent" },
        { name: "Food" },
        { name: "Transportation" },
        { name: "Bills" },
        { name: "Social" },
        { name: "Groceries" },
        { name: "Gift" },
        { name: "Others" }
      ]);
    });
};
