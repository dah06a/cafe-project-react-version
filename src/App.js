import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import MainNavbar from './components/MainNavbar';
import FullTablesImg from './images/full-tables.jpg'
import './App.css';

function App() {
  return (
    <div className="App">

      <Container fluid className="home-landing text-center">
            <MainNavbar />
            <Row className="h-75">
                <Col md={"6"} style={{marginTop: "15%"}}>
                    <h1 className="theme-font" style={{color: "var(--theme-primary)"}}>The Cafe Where You Can Play</h1>
                </Col>
                <Col md={"6"} className="my-auto">
                    <Image src={FullTablesImg} alt="Cafe" className="home-landing-img" roundedCircle />
                </Col>
            </Row>
        </Container>

        <Container style={{height: "100vh"}}>
            <Row className="h-100 align-items-center">
                <Col className="text-center">
                    <h1>Home Content</h1>
                </Col>
            </Row>
        </Container>

        <Container fluid className="home-img-1 parallax">

        </Container>
    </div>
  );
}

export default App;
