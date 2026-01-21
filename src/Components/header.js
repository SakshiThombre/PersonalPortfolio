import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../App.css'; 

function MyNavbar({ setSection }) {
  return (
    /* expand="lg" makes it responsive: horizontal on large screens, hamburger on small */
    <Navbar collapseOnSelect expand="lg" className='navbarContainer' variant="dark">
      <Container className='navbarContainer'>
        {/* Brand Name (Your HeaderName Col) */}
        <Navbar.Brand href="#home"  className='headerName' onClick={() => setSection('home')} >
          <h3>Sakshi Thombre</h3>
        </Navbar.Brand>

        {/* The Hamburger Menu Icon */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Collapsible Section (Your second Col) */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center Navbar">
            <Nav.Link onClick={() => setSection('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setSection('about')}>About</Nav.Link>
            <Nav.Link onClick={() => setSection('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => setSection('contact')}>Hire Me</Nav.Link>
            
            {/* Social Icons */}
            <div className="d-flex social-links">
                <Nav.Link href='https://github.com/SakshiThombre' target="_blank">
                  <FaGithub size={20}  color="#e4eaecff" />
                </Nav.Link>
                <Nav.Link href='http://www.linkedin.com/in/sakshi-thombre' target="_blank">
                  <FaLinkedin size={20} color="#e4eaecff" />
                </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
