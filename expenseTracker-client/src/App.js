import React, { Component } from "react";
import MainPage from "./compontents/MainPage";
import NavBarList from "./compontents/NavbarList";
import ShowAllItem from "./compontents/ShowAllItem";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Chart from "./compontents/Chart";
import EditPage from "./compontents/EditPage";
import PieChart from "./compontents/PieChart";
import BarChart from "./compontents/BarChart";
import ShowDatePage from "./compontents/ShowDatePage";
import ChartTime from "./compontents/ChartTime";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBarList />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/Chart" component={Chart} />
            <Route exact path="/ShowAllItem" component={ShowAllItem} />
            <Route exact path="/edit/:id" component={EditPage} />
            <Route exact path="/PieChart" component={PieChart} />
            <Route exact path="/BarChart" component={BarChart} />
            <Route exact path="/ChartTime" component={ChartTime} />
            <Route exact path="/ShowDatePage" component={ShowDatePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
