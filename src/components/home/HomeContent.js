import React from 'react';
import { Container, Row, Col, Tab, Nav, Carousel, Image } from 'react-bootstrap';
import exampleMap from '../../images/example-map.png';
import emptyBar from '../../images/empty-bar.jpg';
import gameDrinks from '../../images/game-with-drinks.jpg';
import gameLibrary from '../../images/game-library-3.jpg';
import risk from '../../images/risk.jpeg';
import nachos from '../../images/spicy-nachos.jpg';

const HomeContent = (props) => {

    const infoTab = <React.Fragment>
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

    const mapTab = <React.Fragment>
        <h1>Location</h1>
        <Image src={exampleMap} style={{width: "100%", borderRadius: "10px"}} />
        <br />
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </React.Fragment>

    const rulesTab = <React.Fragment>
        <h1>House Rules</h1>
        <ul style={{listStyleType: "none"}}>
            <li><strong>1. </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</li>
            <br />
            <li><strong>2. </strong>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <br />
            <li><strong>3. </strong>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
            <br />
            <li><strong>4. </strong>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ul>
    </React.Fragment>

    const photosTab = <React.Fragment>
        <h1>Photos</h1>
        <Carousel className="w-100">
            <Carousel.Item className="carousel-item">
                <Image className="carousel-image" src={emptyBar} alt="Empty Bar" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <Image className="carousel-image" src={gameDrinks} alt="Playing With Drinks" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <Image className="carousel-image" src={gameLibrary} alt="Game Library"/>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <Image className="carousel-image" src={risk} alt="Risk"/>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <Image className="carousel-image" src={nachos} alt="Spicy Nachos" />
            </Carousel.Item>
        </Carousel>
    </React.Fragment>

    return (
        <Container fluid className="home-content" id="home-content">
            <Row className="h-100 align-items-sm-start align-items-md-center justify-content-center">
                <Col md={10} xl={8} className="text-center home-tabs">
                    <Tab.Container defaultActiveKey="info">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="info" className="home-pill">Info</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="map" className="home-pill">Map</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="rules" className="home-pill">Rules</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="photos" className="home-pill">Photos</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content className=" mt-3">
                                    <Tab.Pane eventKey="info">
                                        {infoTab}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="map">
                                        {mapTab}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="rules">
                                        {rulesTab}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="photos">
                                        {photosTab}
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
