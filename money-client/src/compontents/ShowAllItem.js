import React, { Component } from "react";
import { connect } from "react-redux";

// import { bindActionCreators } from "redux";
import { Table, Container } from "reactstrap";
// import moment from "moment";

import ShowAllItemItem from "./ShowAllItemItem";
class ShowAllItem extends Component {
  renderList() {
    return this.props.expense.map(item => {
      return (
        <ShowAllItemItem key={item.id} item={item} className="list-group" />
      );
    });
  }

  render() {
    return (
      <Container>
        <div className="text-center">
          <h1>LESS IS MORE </h1>
          <h3>One In One out</h3>
        </div>
        <Table striped style={{ marginTop: `3vh` }}>
          <thead>
            <tr>
              <th>#</th>
              <th>DATE</th>
              <th>AMOUNT</th>
              <th>NOTE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = ({ expense }) => {
  return {
    expense: expense.filter(expense => {
      return expense.category_id === 1;
    })
  };
};

export default connect(
  mapStateToProps,
  null
)(ShowAllItem);
