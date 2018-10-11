exports.seed = function(knex, Promise) {
  return knex("expense")
    .del()
    .then(function() {
      return knex("expense").insert([
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-01-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-01-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-02-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-03-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-03-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-03-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-03-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-04-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-04-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-04-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-05-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-06-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-06-03"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-06-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 5,
          date: "2018-06-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-07-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-08-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-09-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-09-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-09-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-03"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-06-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 5,
          date: "2018-05-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-04-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 5,
          date: "2018-03-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-09-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-06-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-08-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-07-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-09-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-06-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-04-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-03-01"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-05-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-01"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-06-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-10-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-02"
        },
        {
          money: 70,
          content: "I don't want to do project",
          category_id: 2,
          date: "2018-03-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-04-02"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 3,
          date: "2018-05-03"
        },
        {
          money: 100,
          content: "I don't want to do project",
          category_id: 1,
          date: "2018-10-03"
        }
      ]);
    });
};
