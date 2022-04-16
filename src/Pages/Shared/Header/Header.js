
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth'
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
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
        {
            user?
            <Button variant='link' onClick={()=>signOut(auth)}>Log out</Button>
            :<NavLink className="nav-link" to="/login">Login</NavLink>
        }
      
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;