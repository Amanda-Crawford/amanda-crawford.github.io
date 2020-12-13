import {Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from 'react-router-dom';
//import About from './../About.js';
//import App from "./../App.js"

const bgColorStyle ={backgroundColor: '#3AAFA9'};


function HeaderBar() {
  return (
    <div>
      <div>
        <Navbar className="shadow" bg="#3AAFA9" variant="dark" style={bgColorStyle} expand="lg" sticky="top" >
          <Navbar.Brand as={Link} to="/"> <h2>Amanda Crawford</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/projects"><h4>Projects</h4></Nav.Link>
              <Nav.Link as={Link} to="/skills"><h4>Skills</h4></Nav.Link>
              <Nav.Link as={Link} to="/" ><h4>About</h4></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default HeaderBar;
//as={Link} to="/about"
