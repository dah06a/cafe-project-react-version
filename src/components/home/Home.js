import React from 'react';
import { Container } from 'react-bootstrap';
import HomeLanding from './HomeLanding';
import HomeContent from './HomeContent';
import HomeEnd from './HomeEnd';
import './Home.css';

const Home = (props) => {
    return(
        <React.Fragment>
            <HomeLanding />
            <Container fluid className="home-img-1 parallax" />
            <HomeContent />
            <Container fluid className="home-img-2 parallax" />
            <HomeEnd />
        </React.Fragment>
    );
}

export default Home;
