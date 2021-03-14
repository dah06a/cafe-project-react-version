import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CanvasArea from './CanvasArea';

const PlayGameSection = (props) => {

    return (
        <Container fluid style={{height: "100vh", backgroundColor: "var(--theme-black)"}}>
            <Row className="h-25">
                <Col className="mx-auto text-center align-self-center">
                    <h3 className="my-3 theme-font" style={{color: "var(--theme-primary)"}}>Why Wait For A Game?</h3>
                    <p style={{color: "var(--theme-light)"}}>Use arrows to move, eat apples to grow.</p>
                    <p style={{color: "var(--theme-light)"}}>Don't hit edges, or yourself!</p>
                </Col>
            </Row>
            <Row className="h-75">
                <Col sm={10} className="h-100 mx-auto text-center">
                    <CanvasArea width={window.innerWidth*0.7} height={window.innerHeight*0.6} />
                </Col>
            </Row>
        </Container>
    );
}

export default PlayGameSection;
