import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import moment from "moment";
class Chart extends Component {
  state = {
    chartData: null
  };

  // renderList() {
  //   let expenses = [];

  //   for (let i = 0; i < uniqueExpenses.length; i++) {
  //     expenses.push(
  //       this.props.expense
  //         .filter(item => item.category_id == uniqueExpenses[i])
  //         .reduce((accum, item) => {
  //           accum.money += item.money;
  //           accum.content += ", " + item.content;
  //           console.log(accum);
  //           return accum;
  //         })
  //     );
  //   }
  //   return expenses.map(item => {
  //     return <Item key={item.id} item={item} className="list-group" />;
  //   });
  // }

  calculateRentTotal = () => {
    let expense1 = this.props.expense.filter(
      expense => expense.category_id === 1
    );
    let rentTotal = expense1.reduce((acc, expense) => acc + expense.money, 0);
    return rentTotal;
  };

  calculateFoodTotal = expense => {
    let expense2 = this.props.expense.filter(
      expense => expense.category_id === 2
    );
    let foodTotal = expense2.reduce((acc, expense) => acc + expense.money, 0);
    return foodTotal;
  };

  calculateTransportationTotal = () => {
    let expense3 = this.props.expense.filter(
      expense => expense.category_id === 3
    );
    let transportationTotal = expense3.reduce(
      (acc, expense) => acc + expense.money,
      0
    );
    return transportationTotal;
  };

  calculateBillsTotal = () => {
    let expense3 = this.props.expense.filter(
      expense => expense.category_id === 4
    );
    let Bills = expense3.reduce((acc, expense) => acc + expense.money, 0);
    return Bills;
  };

  calculateGroceriesTotal = () => {
    let expense3 = this.props.expense.filter(
      expense => expense.category_id === 5
    );
    let GroceriesTotal = expense3.reduce(
      (acc, expense) => acc + expense.money,
      0
    );
    return GroceriesTotal;
  };

  calculateGriftTotal = () => {
    let expense3 = this.props.expense.filter(
      expense => expense.category_id === 6
    );
    let GriftTotal = expense3.reduce((acc, expense) => acc + expense.money, 0);
    return GriftTotal;
  };

  calculateOthersTotal = () => {
    let expense3 = this.props.expense.filter(
      expense => expense.category_id === 7
    );
    let OthersTotal = expense3.reduce((acc, expense) => acc + expense.money, 0);
    return OthersTotal;
  };

  render() {
    let data = {
      labels: [
        "Rent",
        "Food",
        "Transportation",
        "Bills",
        "Groceries",
        "Grft",
        "Others"
      ],
      datasets: [
        {
          label: "Money",
          data: [
            this.calculateRentTotal(),
            this.calculateFoodTotal(),
            this.calculateTransportationTotal(),
            this.calculateBillsTotal(),
            this.calculateGroceriesTotal(),
            this.calculateGriftTotal(),
            this.calculateOthersTotal()
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(50, 255, 126)"
          ]
        }
      ]
    };
    return (
      <div>
        <Pie
          data={data}
          options={{
            title: { display: true, text: "Daily Expense", fontSize: 25 },
            legend: { display: true, position: "right" }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ expense }) => {
  return {
    expense: expense.filter(expense => {
      return (
        moment(expense.date).format("YYYY-MM-DD") ===
        moment(new Date()).format("YYYY-MM-DD")
      );
    })
  };
};

export default connect(
  mapStateToProps,
  null
)(Chart);
