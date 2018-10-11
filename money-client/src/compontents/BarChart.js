import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { Container } from "reactstrap";
class PieChart extends Component {
  state = {
    chartData: null
  };

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
            "rgba(255, 99, 132, 0.6)"
          ]
        }
      ]
    };

    return (
      <Container>
        <Bar
          data={data}
          options={{
            title: { display: true, text: "Expense Bar", fontSize: 25 },
            legend: { display: false, position: "right" }
          }}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ expense }) => {
  return {
    expense
  };
};

export default connect(
  mapStateToProps,
  null
)(PieChart);
