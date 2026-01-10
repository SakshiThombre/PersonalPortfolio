import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

function MyNavbar() {
  return (
     <Container className='navbarContainer'>
        <Row className='Navbar'>
        <Col className='headerName'> 
        <h3>Sakshi Thombre</h3>
        </Col>
        <Col><a href='#home'><b>Home</b></a>
        <a href='#about'><b>About</b></a>
        <a href='#projects'><b>Projects</b></a>
        <a href='#contact'><b>Contact Me</b></a>
        </Col>
      </Row>
     </Container>
  );
}

export default MyNavbar;
