import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuItem from './MenuItem';
import './Menu.css';

const MenuSection = (props) => {
    return (
        <Container fluid className="menu-section">

            <h2 className="text-center theme-font my-4" style={{color: "var(--theme-light)"}}>{props.title}</h2>

            <Row className="h-75">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </Row>
        </Container>
    );
}

export default MenuSection;
