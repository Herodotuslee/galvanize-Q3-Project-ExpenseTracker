import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";
import DatePicker from "react-date-picker";
import { Container } from "reactstrap";
// import moment from "moment";

import { addExpense } from "../actions/expense";
class EditPage extends Component {
  state = {
    id: "",
    money: "",
    content: "",
    category_id: "1",
    date: ""
  };

  componentDidMount() {
    this.setState({ ...this.props.expense });
  }

  componentDidUpdate(prevProps) {
    if (this.props.expense && this.state.id !== this.props.expense.id) {
      this.setState({ ...this.props.expense });
    }
  }

  handleChangePay = e => {
    this.setState({
      money: e.target.value
    });
  };

  handleChangeCategory = e => {
    this.setState({
      category_id: e.target.value
    });
  };

  handleChangeContent = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addExpense(this.state).then(() => {
      this.setState({
        money: "",
        content: ""
      });
    });
    this.props.history.push("/");
  };

  onChange = date => this.setState({ ...date });

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit} striped style={{ marginTop: `3vh` }}>
          <FormGroup>
            <Label for="item">Cost</Label>
            <Input
              type="number"
              name="item"
              id="item"
              placeholder="Input the amount"
              onChange={this.handleChangePay}
              value={this.state.money}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={this.handleChangeCategory}
            >
              <option value="1">Rent</option>
              <option value="2">Food</option>
              <option value="3">Transportation</option>
              <option value="4">Bills</option>
              <option value="5">Social</option>
              <option value="6">Groceries</option>
              <option value="7">Gift</option>
              <option value="8">Other</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="note">Note</Label>
            <Input
              type="text"
              name="text"
              id="note"
              onChange={this.handleChangeContent}
              value={this.state.content}
            />
          </FormGroup>
          <FormGroup>
            <DatePicker
              id="date"
              onChange={this.onChange}
              value={this.state.date}
            />
          </FormGroup>

          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = ({ expense }, props) => {
  return {
    expense: expense.find(
      expense => expense.id === Number(props.match.params.id)
    )
  };
};

const mapDispatchToProps = {
  addExpense
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPage)
);
