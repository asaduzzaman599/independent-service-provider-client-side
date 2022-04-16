import React from 'react';
import { Container, Nav, Navbar, NavDropdown,  } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand  as={Link} to="/">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className='nav-link'  style={({ isActive })=>isActive?{color:"red"}:{color:"blue"}} to="#Services">Services</NavLink>
      <Nav.Link href="/blogs">Blogs</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;