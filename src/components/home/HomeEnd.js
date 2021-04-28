import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomeEnd = (props) => {
    return (
        <Container fluid className="home-content">
            <Row className="h-100 align-items-center">
                <Col className="text-center">
                    <h1 className="theme-font" style={{color: "var(--theme-dark)"}}>Welcome To The TableTop Gaming Cafe</h1>
                    <p className="m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeEnd;
