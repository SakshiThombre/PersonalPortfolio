import Container from 'react-bootstrap/Container';
import girlpng from '../images/girlpng.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { FaUserCircle, FaCode } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { MdWavingHand } from "react-icons/md";

import { FaGithub, FaLinkedin } from 'react-icons/fa';

// import homepage from '../homepage.png';
import video1 from '../videos/StudioShodwe.mp4';
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";


function Home({ setSection }) {
    return (
        <Container className='ForMargin' id='home' style={{ paddingTop: "50px" }}>
            <Row className='col-12 col-sm-12 col-md-12'>
                <Col className='col-1 col-sm-1 col-md-1'>
                </Col>
                <Col className='Home col-12 col-sm-8 col-md-8'>
                    <p id='head1' className='head1 name'>HELLO THERE , WELCOME TO MY PORTFOLIO <MdWavingHand size={22} color="#eeee4c" /></p>
                    <h1 id='head2' className='animation'>I'm <span class="name" id="head3">Sakshi Thombre</span></h1>
                    <h2 id='heade3'>  A Full Stack <span className='name'>Developer</span></h2>
                    <br />
                    <h6 id='heade3'> React&nbsp; • Node.js&nbsp; • Express&nbsp; • MongoDB&nbsp; • MySql&nbsp; • PHP&nbsp; • Javascript&nbsp; • Html&nbsp; • CSS&nbsp; • Bootstrap</h6>
                    <br />
                    <p id='head4'> Passionate Full Stack Developer skilled in React, Node.js, Express.js, MongoDB, PHP, and MySQL. I create responsive, scalable, and user-friendly web applications with a focus on clean code, performance, and great user experience. </p>

                    <Row className='row1'>
                        <Col className='col-3'>
                            <button type="button" href="#project" class="btn btn-default" onClick={(e) => { e.preventDefault(); setSection('projects'); }}>View My Work</button>
                        </Col>
                        <Col>
                            <button type="button" href="#contact" class="btn btn-default" onClick={(e) => { e.preventDefault(); setSection('contact'); }}>Hire Me</button>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <h5 className='name row1'>Let's Connect!</h5>
                    <a href='https://github.com/SakshiThombre' target="_blank" >
                        <FaGithub size={20} />
                    </a>
                    <a href='http://www.linkedin.com/in/sakshi-thombre' target="_blank" >
                        <FaLinkedin size={20} />
                    </a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); setSection('contact'); }}>
                        <FiSend size={20} />
                    </a>


                </Col>


            </Row>

        </Container>


    );
}

export default Home;