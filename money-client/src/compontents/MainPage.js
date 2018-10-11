import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import AddExpense from "./AddExpense";
import Chart from "./Chart";
import ShowTodayCreate from "./ShowTodayCreate";
class MainPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <AddExpense />
            </Col>
            <Col>
              <Chart legendPosition="bottom" />
            </Col>
          </Row>
          <Row>
            <Col>
              <ShowTodayCreate />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainPage;
