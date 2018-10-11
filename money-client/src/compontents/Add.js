import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import DatePicker from "react-date-picker";
// import moment from "moment";
// import Calendar from "react-calendar";
import { addExpense } from "../actions/expense";
class Add extends Component {
  state = {
    money: "",
    content: "",
    category_id: "1",
    date: new Date()
  };
  handleChangePay = e => {
    this.setState({
      money: e.target.value
    });
  };

  handleChangeCategory = e => {
    console.log(e);
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
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
        <FormGroup
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <DatePicker
            id="date"
            onChange={this.onChange}
            value={this.state.date}
          />
          <Button
            type="submit"
            color="primary"
            className="margin-left-12"
            style={{
              marginRight: `3em`
            }}
          >
            ADD
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  addExpense
};

export default connect(
  null,
  mapDispatchToProps
)(Add);
