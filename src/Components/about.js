import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import passportphoto from '../images/passportphoto.png';

import '../App.css';


function About() {
  return (
    <Container className='container about ForMargin' id='about'>
      <Row className='col-12 col-sm-12 col-md-12'>
        <Col className='about col-12 col-sm-6 col-md-6'>
          <h1 id='head3'>About</h1>
          <br />
          <p id='head4'>Hello , my name sakshi Thombre . I'm a full stack developer with the technical Experties which are given below . I did my graducation in Bachelor's of Computer Application. As a graduate student, I combine academic rigor with hands-on development. I don't just write code; I solve problems. Whether it's optimizing a database query to reduce load times or refactoring a React component for better reusability, I focus on efficiency and performance.<br /><br />
            <a href='./Ms.SakshiThombre.pdf' id='resumeButton'><b>View Resume</b></a>
          </p>
          <br />
          <h4 id='head3'>Technical Expertise</h4>
          <p id='head4'>I bridge the gap between complex backend logic and intuitive frontend experiences using a modern tech stack:
            <ul>
              <li><b>Frontend:</b> Crafting responsive, high-performance interfaces with HTML5, CSS3, Bootstrap, and React. I specialize in making the web interactive using JavaScript and jQuery.</li>
              <li><b>Backend & Data:</b> Building robust server-side logic with PHP and managing relational data through optimized MySQL architectures.</li>
            </ul>
          </p>
          <br />
          <h4 id='head3'>Let’s build something great together!</h4>
          <p id='head4'>
            <MdEmail size={20} />sakshithombre51@gmail.com <br />
            <FaGithub />&nbsp;<a href='https://github.com/SakshiThombre'>GitHub</a>
            <br />
            <FaLinkedin color="#e4eaecff" />&nbsp;<a href='http://www.linkedin.com/in/sakshi-thombre '>linkedin</a>
          </p>
        </Col>
        <Col>
         <Col className="aboutphoto">
          <img src={passportphoto} className="img-responsive" alt="Image" />
        </Col>
        <Col className='aboutphoto'>
          <div class="color-circle"></div>
        </Col>
        </Col>
       

      </Row>
    </Container>
  );
}


export default About;
