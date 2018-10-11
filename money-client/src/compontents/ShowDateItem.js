import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import moment from "moment";
import { deleteExpense } from "../actions/expense";

import { Link } from "react-router-dom";

class ShowDateItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{moment(this.props.item.date).format("YYYY-MM-DD")}</td>
        <td>{this.props.item.category_id}</td>
        <td>${this.props.item.money}</td>
        <td>{this.props.item.content}</td>
        <td>
          <Button
            color="danger"
            onClick={() => this.props.deleteExpense(this.props.item.id)}
          >
            Delete
          </Button>
          <Link
            style={{ marginLeft: `1em` }}
            className="btn btn-secondary"
            to={`/edit/${this.props.item.id}`}
          >
            EDIT
          </Link>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteExpense }, dispatch);
};
export default connect(
  null,
  mapDispatchToProps
)(ShowDateItem);
