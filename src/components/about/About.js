import React from 'react';
import Landing from '../shared/Landing';
import AboutStory from './AboutStory';

const About = (props) => {
    return (
        <React.Fragment>
            <Landing title="About" image="show-off-games.jpg" />
            <AboutStory />
        </React.Fragment>
    );
}

export default About;
