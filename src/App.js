import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid className="home-landing">
            <MainNavbar />
            <Row className="h-50">
                <Col className="my-auto">
                    Hello
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
