import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessRook } from '@fortawesome/free-solid-svg-icons'
import './App.css';

const MainNavbar = (props) => <Navbar collapseOnSelect expand="md" className="navbar">
    <Navbar.Brand>
        <Link to="/home">Tabletop Gaming Cafe <FontAwesomeIcon icon={faChessRook} /></Link>
    </Navbar.Brand>
</Navbar>

export default MainNavbar;
