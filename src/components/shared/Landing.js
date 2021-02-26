import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Landing = (props) => {
    return (
        <Container fluid className="parallax" style={{height: "100vh", backgroundImage: `url(/img/${props.image})` }} >
            <Row className="h-100 align-items-center">
                <Col sm={5} md={4} lg={3} className="parallax text-center">
                    <h1
                        className="theme-font"
                        style={{color: "var(--theme-secondary)", backgroundColor: "rgba(0, 0, 0, 0.6)"}}
                        >{props.title}
                    </h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;
