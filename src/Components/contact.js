import { useRef, useState } from 'react'; // Added useState
import emailjs from '@emailjs/browser';
import { Container, Row, Col} from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
            process.env.REACT_APP_TEMPLATE_ID , // 3. Replace with your actual Template ID
            form.current
        )
        .then(() => {
            alert('Message Sent Successfully!');
            form.current.reset(); 
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert(process.env.REACT_APP_TEMPLATE_ID );
            alert('Failed to send message. Please try again.');
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <Container className='container contact ForMargin' id='contact'>
            <Row>
                <Col className='about' md={6}>
                    <h1 id='head3'>Get In Touch With Me</h1>
                    <p id='head4'>I'm currently looking for new opportunities and my inbox is always open.</p>
                    <p id='head4'>
                        <MdEmail size={20} /> sakshithombre51@gmail.com <br />
                        <FiPhone size={20} color="white" />&nbsp;9359889131 <br />
                        <FaGithub />&nbsp;<a href='https://github.com' target="_blank" rel="noreferrer">GitHub</a> <br />
                        <FaLinkedin color="#e4eaecff" />&nbsp;<a href='https://www.linkedin.com' target="_blank" rel="noreferrer">LinkedIn</a>
                    </p>
                </Col>

                <Col className='Contact ' md={6}>
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        {/* Note: 'name' attributes must match your EmailJS template variables */}
                        <input type="text" name="user_name" placeholder="Your Name" required className="form-control mb-2" />
                        <input type="email" name="user_email" placeholder="Your Email" required className="form-control mb-2" />
                        <textarea name="message" placeholder="Your Message" rows="5" required className="form-control mb-2"></textarea>
                        
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
