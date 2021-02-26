import React from 'react';
import { Col, Card } from 'react-bootstrap';

const MenuItem = (props) => {

    return (
        <Col sm={6} md={4} lg={3} xl={2} className="my-4">
            <Card>
                <Card.Title style={{backgroundColor: "var(--theme-secondary)"}}>{props.title ? props.title : "Menu Item Title"}</Card.Title>
                <Card.Body>{props.description ? props.description : "Description of the menu item goes here."}</Card.Body>
                <Card.Footer>{props.price ? props.price : "Price:  $00.00"}</Card.Footer>
            </Card>
        </Col>
    );
}

export default MenuItem;
