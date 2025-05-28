import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="p-3 mb-4">
      <Navbar.Brand href="/">              
            <img
                style={{ maxHeight: '75px'}}
                className="d-block"
                src="/src/assets/marvel-logo.png"
                alt="Marvel Logo"
              /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/" activeclassname="active"> 
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/Characters" activeclassname="active">
            Characters
          </Nav.Link>
          <Nav.Link as={NavLink} to="/Create" activeclassname="active">
            Create Character
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;