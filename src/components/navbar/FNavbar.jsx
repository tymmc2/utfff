import { AccountCircle, Menu } from '@mui/icons-material';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

const FNavbar = () => {
    return (
        <Navbar collapseOnSelect className="fnavbar" bg="light" expand="lg">
            <Container>
                <Navbar.Brand style={{ color: '#bf5700'}} href="/">UT Free Food Finder</Navbar.Brand>
                <Navbar.Toggle style={{ borderColor: '#bf5700'}}><Menu style={{ color: '#bf5700' }} /></Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" eventKey={1}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/feed" eventKey={2}>Feed</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title={<><AccountCircle style={{ marignLeft: 10 }} /></>}>
                            <NavDropdown.Item className="dropdown-link" eventKey={3}><Link className="nav-link" to="/signin">Sign in</Link></NavDropdown.Item>
                            <NavDropdown.Item className="dropdown-link" eventKey={4}><Link className="nav-link" to="/signup">Create an account</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default FNavbar;