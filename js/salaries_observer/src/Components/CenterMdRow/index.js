import React from 'react';
import {Row, Col} from 'react-bootstrap';

const CenterMdRow = ({children}) => (
  <Row className="justify-content-md-center">
    <Col md="auto">
      {children}
    </Col>
  </Row>
)

export default CenterMdRow
