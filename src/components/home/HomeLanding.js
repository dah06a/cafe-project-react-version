import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FullTablesImg from '../../images/full-tables.jpg';
import MainNavbar from '../navigation/MainNavbar';

const HomeLanding = (props) => {
    return(
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
    );
}

export default HomeLanding;
