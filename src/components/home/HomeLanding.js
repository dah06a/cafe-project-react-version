import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FullTablesImg from '../../images/full-tables.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const HomeLanding = (props) => {
    return(
        <Container fluid className="home-landing text-center">
            <Row className="h-100">
                <Col md={6} style={{marginTop: "20%"}}>
                    <h1 className="theme-font" style={{color: "var(--theme-primary)"}}>The Cafe Where You Can Play</h1>
                    <Row className="justify-content-center">
                        <Col sm={2} >
                        <a href="#home-content"><FontAwesomeIcon icon={faArrowCircleDown} className="scroll m-5" /></a>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} className="my-auto">
                    <Image src={FullTablesImg} alt="Cafe" className="home-landing-img" roundedCircle />
                </Col>
            </Row>
        </Container>
    );
}

export default HomeLanding;
