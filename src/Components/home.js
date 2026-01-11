import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { FaUserCircle, FaCode } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
// import homepage from '../homepage.png';
import video1 from '../videos/StudioShodwe.mp4';
import video3 from "../videos/video3.mp4";
import video4 from "../videos/video4.mp4";


function Home() {
    return (
        <Container className='container' id='home'>
            <Row>
                <Col className='Home'>
                    <p id='head1'>HELLO THERE , WELCOME TO MY PORTFOLIO </p>
                    <h1 id='head2'>I'm Sakshi Thombre</h1>
                    <h2 id='heade3'>  A Full Stack Developer</h2>
                    <p id='head4'> I am Sakshi Thombre, a Full Stack Developer dedicated to building seamless, high-performance web applications. My expertise spans the modern React and Node.js ecosystem, complemented by a solid foundation in PHP and MySQL for robust back-end architecture. With a sharp eye for responsive design using Bootstrap and CSS3, I bridge the gap between complex logic and intuitive user interfaces.</p>
                    <a href="#about"><FaUserCircle /></a>
                    <a href="#projects"><FaCode /></a>
                    <a href="#contact"><FiSend /></a>
                </Col>
                <Col className='homePhoto'>
                     <video
                        autoPlay
                        muted
                        defaultMuted
                        loop
                        playsInline
                        width="100%"
                     className='video1'>
                        <source src={video1} type="video/mp4" className='video' />
                    </video>
                    <video
                        autoPlay
                        muted
                        defaultMuted
                        loop
                        playsInline
                        width="100%"
                     className='video2'>
                        <source src={video3} type="video/mp4" className='video' />
                    </video>
                     <video
                        autoPlay
                        muted
                        defaultMuted
                        loop
                        playsInline
                        width="100%"
                    className='video3'>
                        <source src={video4} type="video/mp4" className='video' />
                    </video>

                </Col>
            </Row>
        </Container>
    );
}

export default Home;