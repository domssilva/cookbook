import React from 'react';
import {APPNAME} from './Utils/constants';
import {Container, Row, Col, Button} from 'react-bootstrap';

import CountryForm from './Components/CountryForm';
import ProfessionForm from './Components/ProfessionForm';

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>{APPNAME}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProfessionForm />
        </Col>
        <Col>
          <CountryForm />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Button>get sheet</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
