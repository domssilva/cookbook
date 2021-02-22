import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello Salary</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>form 1</p>
        </Col>
        <Col>
          <p>form 2</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>get sheet</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
