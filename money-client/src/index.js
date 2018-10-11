import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";
import { fetchExpense } from "./actions/expense";
const middleware = [logger, thunkMiddleware];
const store = createStore(reducers, applyMiddleware(...middleware));

store.dispatch(fetchExpense());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
