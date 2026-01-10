import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { FaUserCircle, FaCode } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import homepage from '../homepage.png';


function Home() {
    return (
        <Container className='container' id='home'>
            <Row>
                <Col className='Home'>
                    <p id='head1'>HELLO THERE , WELCOME TO MY PORTFOLIO </p>
                    <h1 id='head2'>I'm Sakshi Thombre</h1>
                    <h2 id='heade3'>  A Full Stack Developer</h2>
                    <p id='head4'> I am Sakshi Thombre, a Full Stack Developer dedicated to building seamless, high-performance web applications. My expertise spans the modern React and Node.js ecosystem, complemented by a solid foundation in PHP and MySQL for robust back-end architecture. With a sharp eye for responsive design using Bootstrap and CSS3, I bridge the gap between complex logic and intuitive user interfaces. <br /> I specialize in transforming business requirements into scalable digital products that prioritize both security and speed.</p>
                    <a href="#about"><FaUserCircle /></a>
                    <a href="#projects"><FaCode /></a>
                    <a href="#contact"><FiSend /></a>
                </Col>
                <Col className='homePhoto'>
                    <img src={homepage} className="img-responsive" alt="Image" />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;