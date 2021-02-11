import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Container>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
          <Col>4</Col>
          <Col>5</Col>
          <Col>6</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
