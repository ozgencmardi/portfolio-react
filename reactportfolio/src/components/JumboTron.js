import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';

const JumboTron = () => {
  return (
    <Jumbotron fluid className="jumbotron lead">
      <Container>
        <Row>
          <Col xs={12} md={9} lg={9} xl={10}>
            <h2 className="text-shadow">I'm available for Freelancer or Remote Work</h2>
          </Col>
          <Col xs={12} md={3} lg={3} xl={2}>
            <a href="#contact"><Button variant="dark" size="lg">Hire Me!</Button></a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default JumboTron;
