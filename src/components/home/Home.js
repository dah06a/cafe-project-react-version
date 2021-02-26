import React from 'react';
import HomeLanding from './HomeLanding';
import HomeContent from './HomeContent';
import HomeEnd from './HomeEnd';
import PageDivider from '../shared/PageDivider';
import './Home.css';

const Home = (props) => {
    return(
        <React.Fragment>
            <HomeLanding />
            <PageDivider image="catan.jpeg" />
            <HomeContent />
            <PageDivider image="pandemic.jpg" />
            <HomeEnd />
        </React.Fragment>
    );
}

export default Home;
