import { useRef, useState } from 'react'; // Added useState
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin,FaMapMarkerAlt} from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import '../App.css';

// Initialize SDK with Public Key (Ensure this matches your .env variable name)
emailjs.init(process.env.REACT_APP_PUBLICKEY);
function FormContact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,  // 2. Replace with your actual Service ID
            process.env.REACT_APP_TEMPLATE_ID, // 3. Replace with your actual Template ID
            form.current
        )
            .then(() => {
                alert('Message Sent Successfully!');
                form.current.reset();
            })
            .catch((error) => {
                console.error('FAILED...', error);
                alert(process.env.REACT_APP_TEMPLATE_ID);
                alert('Failed to send message. Please try again.');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Container className=' contact ForMargin' id='contact' >
            <Row>
                <Col className='about contact-card col-sm-6 col-md-6 ' md={6}>
                    <h1 id='head3' className='animation'>Get In <span>Touch</span></h1>
                    <p id='head4'>I'm currently looking for new opportunities and my inbox is always open.</p>
                    <p id='head4'>
                        <MdEmail size={20} className='social-icon' /> sakshithombre51@gmail.com <br />
                        <FiPhone size={20}  className='social-icon' />&nbsp;9359889131 <br />
                        <FaMapMarkerAlt size={20}  className='social-icon' />&nbsp;Pune , Maharashtra <br />
                        <FaGithub size={20} className='social-icon' />&nbsp;<a href='https://github.com/SakshiThombre' target="_blank" rel="noreferrer">GitHub</a> <br />
                        <FaLinkedin size={20} className='social-icon' />&nbsp;<a href='https://www.linkedin.com' target="_blank" rel="noreferrer">LinkedIn</a>
                    </p>
                </Col>

                <Col className='Contact col-6 col-sm-6 col-md-6 ' md={6}>
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        {/* Note: 'name' attributes must match your EmailJS template variables */}
                        <input type="text" name="user_name" placeholder="Name" required className="form-control mb-2" />
                        <input type="email" name="user_email" placeholder="Email" required className="form-control mb-2" />
                        <textarea name="message" placeholder="Message" rows="5" required className="form-control mb-2"></textarea>

                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default FormContact;
