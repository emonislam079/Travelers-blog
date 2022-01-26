import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home"><h1 className="text-success">TRAVELER'S</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home"><i className="fas fa-home"></i> HOME</Nav.Link>
                            <Nav.Link as={HashLink} to="/addBlogs"><i class="fas fa-hotel"></i> ADD YOUR EXPERIENCE</Nav.Link>
                            <Nav.Link as={HashLink} to="/dashboard"><i class="fas fa-tachometer-alt"></i> DASHBOARD</Nav.Link>             

                        </Nav>
                        <Nav>
                        {user?.email ?
                                <Button onClick={logout} variant="dark">Logout</Button> :
                                <>
                                <Nav.Link as={HashLink} to="/login"> <i class="fas fa-sign-in-alt"></i>Login</Nav.Link>
                                </>}
                                
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;