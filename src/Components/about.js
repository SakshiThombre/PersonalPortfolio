import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import passportphoto from '../images/passportphoto.png';

import '../App.css';


function About() {
  return (
    <Container className=' about ForMargin' id='about' style={{paddingTop:"50px"}}>
      <Row className='col-12 col-sm-12 col-md-12'>
        <Col className='about contact-card col-12 col-sm-6 col-md-6'>
          <h2 id='head3' className='animation'>About <span>Me</span></h2>
          <br />
          <p id='head4'>I'm Sakshi Thombre, a passionate Full Stack Developer specializing in React, Node.js, PHP, and MySQL. I enjoy building responsive, high-performance web applications with clean UI and efficient backend architecture.<br /><br />
            <a href={process.env.PUBLIC_URL + "/Ms.SakshiThombre.pdf"} id='resumeButton'><b>View Resume</b></a>
          </p>
          <br />
          <br />

          <h4 id='head5'>Technical Expertise</h4>
          <p id='head4'>I bridge the gap between complex backend logic and intuitive frontend experiences using a modern tech stack:
            <ul>
              <li><b className='techstack'>Frontend:</b> Crafting responsive, high-performance interfaces with HTML5, CSS3, Bootstrap, and React. I specialize in making the web interactive using JavaScript and jQuery.</li>
              <li><b className='techstack'>Backend & Database:</b> Building robust server-side logic with PHP and managing relational data through optimized MySQL architectures.</li>
            </ul>
          </p>
          <br />
          <br />
          <h4 id='head5'>Let’s build something great together!</h4>
          <p id='head4'>
            <MdEmail size={20} />&nbsp;sakshithombre51@gmail.com <br />
            <FaGithub />&nbsp;<a href='https://github.com/SakshiThombre'>GitHub</a>
            <br />
            <FaLinkedin color="#e4eaecff" />&nbsp;<a href='http://www.linkedin.com/in/sakshi-thombre '>linkedin</a>
          </p>
        </Col>
        <Col>
          <Col className="aboutphoto">
            <img src={passportphoto} className="img-responsive" alt="Image" />
          </Col>
        </Col>


      </Row>
    </Container>
  );
}


export default About;
