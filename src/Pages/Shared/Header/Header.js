
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import './Header.css'
const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <Navbar collapseOnSelect expand="lg" className='header' bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">Rio'S Capture</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link className='nav-link'  href="#services">Services</Nav.Link> */}
            <NavLink style={({ isActive }) => isActive ? { color: "#2fb694" } : {}} className='nav-link' to="/">HOME</NavLink>
            <NavLink style={({ isActive }) => isActive ? { color: "#2fb694" } : {}} className='nav-link' to="/about">ABOUT</NavLink>
            <NavLink style={({ isActive }) => isActive ? { color: "#2fb694" } : {}} className='nav-link' to="/blogs">BLOGS</NavLink>

          </Nav>
          <Nav>
            {
              user ?
                <Button variant='link' className='link' onClick={() => signOut(auth)}>Log out</Button>
                : <>
                  <NavLink style={({ isActive }) => isActive ? { color: "#2fb694" } : {}} className="nav-link" to="/login">LOGIN</NavLink>
                  <NavLink style={({ isActive }) => isActive ? { color: "#2fb694" } : {}} className="nav-link" to="/register">REGISTER</NavLink>
                </>
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;