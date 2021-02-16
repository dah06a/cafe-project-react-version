import React from 'react';
import { Container, Row, Col, Tab, Nav, Image } from 'react-bootstrap';
import exampleMap from '../../images/example-map.png';

const HomeContent = (props) => {

    const infoTab = (
        <React.Fragment>
            <h1>Info</h1>
            <p><strong>Hours:</strong></p>
            <p>Monday - Friday:  10am thru 10pm</p>
            <p>Saturday - Sunday:  11am thru 11pm</p>
            <br />
            <p><strong>Phone:</strong></p>
            <button
                onClick={() => alert("Call the following phone number:  (555) 555 - 5555 ?")}
                style={{background: "none", border: "none", color: "blue"}}
                >(555) 555- 5555
            </button>
            <br />
            <br />
            <p><strong>Address:</strong></p>
            <p>1234 Boardwalk Avenue</p>
            <p>Real City Land, State, 11111</p>
        </React.Fragment>
    );

    return (
        <Container fluid className="home-content parallax">
            <Row className="h-100 align-items-center justify-content-center">
                <Col md={8} className="text-center home-tabs">
                    <Tab.Container defaultActiveKey="hours">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="info">Info</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="map">Map</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="rules">Rules</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="info">
                                        {infoTab}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="map">
                                        <h1>Location</h1>
                                        <Image src={exampleMap} style={{width: "100%", borderRadius: "10px"}} />
                                        <br />
                                        <br />
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="rules">
                                        <h1>House Rules</h1>
                                        <ul>
                                            <li>Rule 1 is ...</li>
                                            <li>Rule 2 is ...</li>
                                            <li>Rule 3 is ...</li>
                                            <li>Rule 4 is ...</li>
                                            <li>Rule 5 is ...</li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeContent;
