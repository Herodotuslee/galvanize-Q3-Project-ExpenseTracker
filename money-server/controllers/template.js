const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    res.send("Hello");
  },

  // FOR ExpenseLIST

  getExpenseList: (req, res) => {
    knex("expense").then(result => {
      res.json(result);
    });
  },
  deleteOneExpense: (req, res) => {
    knex("expense")
      .where("id", req.params.Expense_id)
      .del()
      .then(result => res.json(result));
  },

  addOneExpense: (req, res) => {
    console.log("here", req.body);
    knex("expense")
      .insert({
        content: req.body.content,
        money: req.body.money,
        category_id: Number(req.body.category_id),
        date: req.body.date
      })
      .returning("*")
      .then(result => {
        // console.log("add", result);
        res.json(result[0]);
      });
  },

  updateExpensePage: (req, res) => {
    knex("expense")
      .where("id", req.params.Expense_id)
      .update({
        money: req.body.money,
        content: req.body.content
      })
      .returning("*")
      .then(result => {
        res.json(result);
      });
  }
};
