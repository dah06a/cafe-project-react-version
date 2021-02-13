import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeLanding from './HomeLanding';
import './Home.css';

const Home = (props) => {
    return(
        <React.Fragment>

            <HomeLanding />

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
