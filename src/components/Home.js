import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FullTablesImg from '../images/full-tables.jpg';
import MainNavbar from './MainNavbar';

const Home = (props) => {
    return(
        <React.Fragment>

            <Container fluid className="home-landing text-center">
                <MainNavbar home />
                <Row className="h-75">
                    <Col md={"6"} style={{marginTop: "15%"}}>
                        <h1 className="theme-font" style={{color: "var(--theme-primary)"}}>The Cafe Where You Can Play</h1>
                    </Col>
                    <Col md={"6"} className="my-auto">
                        <Image src={FullTablesImg} alt="Cafe" className="home-landing-img" roundedCircle />
                    </Col>
                </Row>
            </Container>

            <Container fluid className="home-content parallax">
                <Row className="h-100 align-items-center">
                    <Col className="text-center">
                        <h1>Home Content</h1>
                    </Col>
                </Row>
            </Container>

            <Container fluid className="home-img-1 parallax">

            </Container>
        </React.Fragment>
    );
}

export default Home;
