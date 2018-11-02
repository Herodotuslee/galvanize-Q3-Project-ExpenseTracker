const expense = require("../controllers/controller_expense.js");
module.exports = function(app) {
  app.get("/", expense.index);
  app.get("/api/expense", expense.getExpenseList);
  app.delete("/api/expense/delete/:Expense_id", expense.deleteOneExpense);
  app.post("/api/expense/post", expense.addOneExpense);
  app.patch("/api/expense/edit/:Expense_id", expense.updateExpensePage);
};
