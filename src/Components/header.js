import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function MyNavbar() {
  return (
    <Container className='navbarContainer'>
      <Row className='Navbar'>
        <Col className='headerName'>
          <h3>Sakshi Thombre</h3>
        </Col>
        <Col><a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Hire_Me</a>
          <a href='https://github.com/SakshiThombre'><FaGithub /></a>
          <a href='http://www.linkedin.com/in/sakshi-thombre '><FaLinkedin color="#e4eaecff" /></a>
        </Col>
      </Row>
    </Container>
  );
}

export default MyNavbar;
