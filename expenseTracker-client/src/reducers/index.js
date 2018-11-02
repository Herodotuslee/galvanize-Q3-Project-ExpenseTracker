import { combineReducers } from "redux";
import ExpenseReducer from "./reducer_expense";

const rootReducer = combineReducers({
  expense: ExpenseReducer
});

export default rootReducer;
