//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js");
module.exports = function(app) {
  app.get("/", template.index);
  app.get("/api/expense", template.getExpenseList);
  app.get("/api/expense/delete/:Expense_id", template.deleteOneExpense);

  app.post("/api/expense/post", template.addOneExpense);
  app.post("/api/expense/edit/:Expense_id", template.updateExpensePage);
};
