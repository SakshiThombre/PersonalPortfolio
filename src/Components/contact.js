import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';


function FormContact() {
    return (
        <Container className='container contact' id='contact'>
            <Row>
                <h3>Contact</h3>
            </Row>
            <Row>
                <Col className='about'>
                    <h1 id='head3'>Get In Touch With Me</h1>
                    <p id='head4'> I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I’ll try my best
                        to get back to you!</p>
                    <p id='head4'>
                        <MdEmail size={20} />sakshithombre51@gmail.com <br />
                        <FiPhone size={20} color="white" />&nbsp;9359889131 <br />
                        <FaGithub />&nbsp;<a href='https://github.com/SakshiThombre'>GitHub</a>
                        <br />
                        <FaLinkedin color="#e4eaecff" />&nbsp;<a href='http://www.linkedin.com/in/sakshi-thombre '>linkedin</a>

                    </p>
                </Col>

                <Col className='Contact'>
                    <form className="contact-form" >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                            /> <br />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                            /> <br />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                            ></textarea> <br />
                        <button type="submit">
                            Send Message 
                        </button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default FormContact;
