import {
    Outlet,
    Link
  } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './layout.css';

function Layout(){
    return(
        <>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="ms-left">TechVision Solutions</Navbar.Brand>
            <Nav className="ms-right">
              <Nav.Link as={Link} to="/login">LoginPage</Nav.Link>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About-Us</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/Jobs">Jobs</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Outlet />
      </>

    )
}

export default Layout;