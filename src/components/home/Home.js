import React from 'react';
import { Container } from 'react-bootstrap';
import HomeLanding from './HomeLanding';
import HomeContent from './HomeContent';
import './Home.css';

const Home = (props) => {
    return(
        <React.Fragment>

            <HomeLanding />

            <HomeContent />

            <Container fluid className="home-img-1 parallax">

            </Container>
        </React.Fragment>
    );
}

export default Home;
