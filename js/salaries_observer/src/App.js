import React from 'react';
import {APPNAME} from './Utils/constants';
import {Container, Row, Col, Button} from 'react-bootstrap';

import CenterMdRow from './Components/CenterMdRow';
import CountryForm from './Components/CountryForm';
import ProfessionForm from './Components/ProfessionForm';

function App() {
  return (
    <Container>
      <CenterMdRow>
        <h1>{APPNAME}</h1>
      </CenterMdRow>
      <Row>
        <Col>
          <ProfessionForm />
        </Col>
        <Col>
          <CountryForm />
        </Col>
      </Row>
      <CenterMdRow>
        <Button>get sheet</Button>
      </CenterMdRow>
    </Container>
  );
}

export default App;
