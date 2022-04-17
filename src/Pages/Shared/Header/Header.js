
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth'
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import './Header.css'
const Header = () => {
  //firebase hooks
  const [user] = useAuthState(auth)
  return (
    <Navbar collapseOnSelect expand="lg" className='header' sticky='top' bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/" className='text-secondary mb-2'><span className="fs-3 fw-bold" style={{ color: "#2fb694" }}> M</span>'s Capture</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='order-lg-2 '>

            {/* if user logged in then showing name and logout button otherwish showing login and register button */}
            {
              user ?
                <>
                  <p className='mt-3'>
                    {user.displayName}
                  </p>
                  <button className='link ms-lg-3 d-inline-block' onClick={() => signOut(auth)}>Log out</button>
                </>
                : <>
                  <NavLink style={({ isActive }) => isActive ? { color: "#2fb694" } : {}} className="nav-link" to="/login">LOGIN</NavLink>
                  <NavLink style={({ isActive }) => isActive ? { color: "#2fb694" } : {}} className="nav-link" to="/register">REGISTER</NavLink>
                </>
            }


          </Nav>
          <Nav className="me-auto">
            <NavLink style={({ isActive }) => isActive ? { color: "#2fb694" } : {}} className='nav-link' to="/">HOME</NavLink>
            <NavLink style={({ isActive }) => isActive ? { color: "#2fb694" } : {}} className='nav-link' to="/blogs">BLOGS</NavLink>
            <NavLink style={({ isActive }) => isActive ? { color: "#2fb694" } : {}} className='nav-link' to="/about">ABOUT</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;