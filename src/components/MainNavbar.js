import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessRook } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const MainNavbar = (props) => <Navbar collapseOnSelect expand="md" className="navbar" variant="dark">

    <Navbar.Brand>
        <Link to="/home">Tabletop Cafe <FontAwesomeIcon icon={faChessRook} /></Link>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbar-collapse" />

    <Navbar.Collapse id="navbar-collapse">
        <Nav className="ml-auto">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Games</Nav.Link>
            <Nav.Link>Food</Nav.Link>
            <Nav.Link>Reserve</Nav.Link>
        </Nav>
    </Navbar.Collapse>

</Navbar>

export default MainNavbar;
