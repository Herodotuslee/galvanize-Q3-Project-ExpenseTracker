import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { Table } from "reactstrap";
import moment from "moment";

import Item from "./Item";
class Show extends Component {
  renderList() {
    return this.props.expense.map(item => {
      return <Item key={item.id} item={item} className="list-group" />;
    });
  }

  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>DATE</th>
              <th>CATEGORY</th>
              <th>AMOUNT</th>
              <th>NOTE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = ({ expense }) => {
  return {
    expense: expense.filter(expense => {
      return (
        moment(expense.created_at).format("YYYY-MM-DD") ===
        moment(new Date()).format("YYYY-MM-DD")
      );
    })
  };
};

export default connect(
  mapStateToProps,
  null
)(Show);
