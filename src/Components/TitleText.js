import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';

class TitleText extends Component {
  /*
  constructor() {
    super();
  }
  */

  render() {
    return (      
      <Container>
        <Row className="justify-content-md-center mt-3">
          <Col md="auto">
            <h1 className="display-3">Expense Tracker</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center mt-1">
          <Col md="auto">
            <h2 className="text-success">Add A New Item:</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TitleText;