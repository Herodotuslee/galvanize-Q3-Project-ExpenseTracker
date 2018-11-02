import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import { Container } from "reactstrap";

class PieChart extends Component {
  state = {
    chartData: null
  };

  showall = expense => {
    let output = [];
    for (let i = 1; i < 9; i++) {
      output.push(this.calculateTotal(expense, i));
    }
    return output;
  };

  calculateTotal = (expense, cat) => {
    let expense1 = this.props.expense.filter(
      expense => expense.category_id === cat
    );
    let rentTotal = expense1.reduce((acc, expense) => acc + expense.money, 0);
    return rentTotal;
  };

  render() {
    let data = {
      labels: [
        "Rent",
        "Food",
        "Transportation",
        "Bills",
        "Social",
        "Groceries",
        "Grft",
        "Others"
      ],
      datasets: [
        {
          label: "Money",
          data: this.showall(this.props.expense),
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(199, 236, 238, 1.0)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(50, 255, 126)"
          ]
        }
      ]
    };
    return (
      <Container>
        <Pie
          data={data}
          options={{
            title: { display: true, text: "PIE CHART", fontSize: 25 },
            legend: { display: true, position: "right" }
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
