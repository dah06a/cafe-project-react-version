import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessRook } from '@fortawesome/free-solid-svg-icons'
import './Shared.css';

const MainNavbar = (props) => {
    return (
        <Navbar collapseOnSelect sticky="top" expand="md" className="navbar" variant="dark">

            <Navbar.Brand>
                <Link to="/">Tabletop Cafe <FontAwesomeIcon icon={faChessRook} /></Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-collapse" />

            <Navbar.Collapse id="navbar-collapse">
                <Nav className="ml-auto" activeKey={props.location.pathname}>
                    <Nav.Link href="/" active={props.home}>Home</Nav.Link>
                    <Nav.Link href="/about" active={props.about} >About</Nav.Link>
                    <Nav.Link href="/games" active={props.games}>Games</Nav.Link>
                    <Nav.Link href="/menu" active={props.menu}>Menu</Nav.Link>
                    <Nav.Link href="/reserve" active={props.reserve}>Reserve</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
}

export default MainNavbar;
