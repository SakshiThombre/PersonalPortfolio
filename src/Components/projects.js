import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Project() {
    return (
        <Container id='projects'>
            <Row>
                 <h1 id='head3'>Projects</h1>
                 <br />
                <Col>
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title text-primary font-weight-bold">CODE-QUEST</h5>
                            <p className="card-text text-muted small">Developed a comprehensive platform that allows educators to create, manage, and evaluate exams digitally. The system features two distinct interfaces: an Admin Dashboard for quize management and a Student Portal for real-time test-taking with automated result generation. <br />
                                <b>Core Features</b>
                                <br />
                                <ul>
                                    <li>Secure Authentication: User login and registration system with role-based access control (Admin vs. Student).</li>
                                    <li>Dynamic Exam Management: Admins can add, edit, or delete subjects and multiple-choice questions (MCQs).</li>
                                    <li>Instant Result Calculation: Automated grading logic that provides students with immediate feedback upon submission.</li>
                                </ul>
                            </p>
                            <div className="mb-3">
                                <span className="badge bg-secondary">Html</span>&nbsp;
                                <span className="badge bg-secondary">CSS</span>&nbsp;
                                <span className="badge bg-secondary">Bootstrap</span>&nbsp;
                                <span className="badge bg-secondary">Javascript</span>&nbsp;
                                <span className="badge bg-secondary">Jquery</span>&nbsp;
                                <span className="badge bg-secondary">PHP</span>&nbsp;
                                <span className="badge bg-secondary">MySQL</span>
                            </div>
                            <a href="https://demo-link.com" className="btn btn-outline-primary btn-sm rounded-pill" target="_blank">Live Demo</a> &nbsp;
                            <a href="https://github.com/SakshiThombre/CODE-QUEST " className="btn btn-dark btn-sm rounded-pill" target="_blank">GitHub</a>
                        </div>
                    </div>
                </Col>
                <Col>
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary font-weight-bold">SMART BILLING SYSTEM</h5>
                                <p className="card-text text-muted small">Developed a comprehensive platform that allows educators to create, manage, and evaluate exams digitally. The system features two distinct interfaces: an Admin Dashboard for quize management and a Student Portal for real-time test-taking with automated result generation. <br />
                                    <b>Core Features</b>
                                    <br />
                                    <ul>
                                        <li>Secure Authentication: User login and registration system with role-based access control (Admin vs. Student).</li>
                                        <li>Dynamic Exam Management: Admins can add, edit, or delete subjects and multiple-choice questions (MCQs).</li>
                                        <li>Instant Result Calculation: Automated grading logic that provides students with immediate feedback upon submission.</li>
                                    </ul>
                                </p>
                                <div className="mb-3">
                                    <span className="badge bg-secondary">Html</span>&nbsp;
                                    <span className="badge bg-secondary">CSS</span>&nbsp;
                                    <span className="badge bg-secondary">Bootstrap</span>&nbsp;
                                    <span className="badge bg-secondary">Javascript</span>&nbsp;
                                    <span className="badge bg-secondary">Jquery</span>&nbsp;
                                    <span className="badge bg-secondary">PHP</span>&nbsp;
                                    <span className="badge bg-secondary">MySQL</span>
                                </div>
                                <a href="https://demo-link.com" className="btn btn-outline-primary btn-sm rounded-pill" target="_blank">Live Demo</a> &nbsp;
                                <a href="https://github.com/SakshiThombre/SMART-BILLING-SYSTEM " className="btn btn-dark btn-sm rounded-pill" target="_blank">GitHub</a>
                            </div>
                        </div>
                </Col>
                <Col>
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <h5 className="card-title text-primary font-weight-bold">AIRBNB</h5>
                                <p className="card-text text-muted small">Developed a comprehensive platform that allows educators to create, manage, and evaluate exams digitally. The system features two distinct interfaces: an Admin Dashboard for quize management and a Student Portal for real-time test-taking with automated result generation. <br />
                                    <b>Core Features</b>
                                    <br />
                                    <ul>
                                        <li>Secure Authentication: User login and registration system with role-based access control (Admin vs. Student).</li>
                                        <li>Dynamic Exam Management: Admins can add, edit, or delete subjects and multiple-choice questions (MCQs).</li>
                                        <li>Instant Result Calculation: Automated grading logic that provides students with immediate feedback upon submission.</li>
                                    </ul>
                                </p>
                                <div className="mb-3">
                                    <span className="badge bg-secondary">Html</span>&nbsp;
                                    <span className="badge bg-secondary">CSS</span>&nbsp;
                                    <span className="badge bg-secondary">Bootstrap</span>&nbsp;
                                    <span className="badge bg-secondary">Javascript</span>&nbsp;
                                    <span className="badge bg-secondary">Jquery</span>&nbsp;
                                    <span className="badge bg-secondary">PHP</span>&nbsp;
                                    <span className="badge bg-secondary">MySQL</span>
                                </div>
                                <a href="https://demo-link.com" className="btn btn-outline-primary btn-sm rounded-pill" target="_blank">Live Demo</a> &nbsp;
                                <a href="https://github.com/SakshiThombre/RESUME_GENERATOR " className="btn btn-dark btn-sm rounded-pill" target="_blank">GitHub</a>
                            </div>
                        </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Project;