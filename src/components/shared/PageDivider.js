import React from 'react';
import { Container } from 'react-bootstrap';

const PageDivider = (props) => {
    return (
        <Container fluid className="parallax" style={{height: "100vh", backgroundImage: `url(/img/${props.image})` }} />
    );
}

export default PageDivider;
