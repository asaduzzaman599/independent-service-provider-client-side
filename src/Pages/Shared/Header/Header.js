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
      {/* <Nav.Link className='nav-link'  href="#services">Services</Nav.Link> */}
      <NavLink className='nav-link' to="/about">About</NavLink>
      <NavLink className='nav-link' to="/blogs">Blogs</NavLink>
      
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