import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYelp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Navigation.css';

const MainFooter = (props) => {
    return (
        <footer className="navbar">
            <Container className="m-3">
                <Row className="w-100">
                    <Col md={6} className="text-left foot-info">
                        <ul>
                            <li>Tabletop Gaming Cafe</li>
                            <br />
                            <li>1212 Boardwalk Ave., (555) 555 - 5555</li>
                            <br />
                            <li><strong>Mon-Fri:</strong> 9am - 9pm, <strong>Sat-Sun:</strong> 11am - 11pm</li>
                            <br />
                        </ul>
                    </Col>
                    <Col md={6} className="text-center align-self-md-center foot-info foot-icons">
                        <ul className="d-flex p-0" style={{justifyContent: "space-around", listStyleType: "none"}}>
                            <li><h2><a href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></h2></li>
                            <li><h2><a href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></h2></li>
                            <li><h2><a href="http://www.yelp.com"><FontAwesomeIcon icon={faYelp} /></a></h2></li>
                            <li><h2><a href="http://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></h2></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default MainFooter;
