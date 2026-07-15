import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import codequest1 from '../videos/codequet1.mp4';
import video4 from "../videos/video4.mp4";
import resumeGenerator from "../videos/resumeGenerator.mp4";


function Project() {
    return (
        <Container id='projects' className='projects ForMargin' style={{paddingTop:"50px"}}>
            <Row className='col-12 col-sm-12 col-md-12 projectHead'>
                <h2 id='head3' className='animation'>Featured<span> Projects</span></h2>
            </Row>
            <Row className='col-12 col-sm-12 col-md-12 projectRow'>
                {/* <h1 id='head3'>Projects</h1> */}
                <br />
                <Col className='col-12  col-sm-12 col-md-3 projCol'>
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">CODE-QUEST</h5>
                            {/* <p className="card-text text-muted small">Developed a comprehensive platform that allows educators to create, manage, and evaluate exams digitally. The system features two distinct interfaces: an Admin Dashboard for quize management and a Student Portal for real-time test-taking with automated result generation. <br />
                            </p> */}
                            <video
                                autoPlay
                                muted
                                defaultMuted
                                loop
                                playsInline
                                width="100%"
                            >
                                <source src={codequest1} type="video/mp4" className='video' />
                            </video>
                            <div className="mb-3">
                                <span className="badge bg-secondary">Html</span>&nbsp;
                                <span className="badge bg-secondary">CSS</span>&nbsp;
                                <span className="badge bg-secondary">Bootstrap</span>&nbsp;
                                <span className="badge bg-secondary">Javascript</span>&nbsp;
                                <span className="badge bg-secondary">Jquery</span>&nbsp;
                                <span className="badge bg-secondary">PHP</span>&nbsp;
                                <span className="badge bg-secondary">MySQL</span>
                            </div>
                            <a href="https://www.linkedin.com/in/sakshi-thombre-068191326/" className="btn projectLinkdin btn-sm rounded-pill " target="_blank">Linkedin</a>&nbsp;
                            <a href="https://github.com/SakshiThombre/CODE-QUEST " className="btn projectGit btn-sm rounded-pill" target="_blank">GitHub</a>
                        </div>
                    </div>
                </Col>
                <Col className='col-12 col-sm-12 col-md-3 projCol'>
                    <div className="card h-100 shadow-sm border-0 ">
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">RESUME GENERATOR</h5>
                            {/* <p className="card-text text-muted small">Developed a comprehensive platform that  manage, and evaluate bills digitally. The Smart Billing System is a digital tool that helps business owners move away from manual paperwork by automating how they charge customers and track sales. Think of it as a digital checkout counter that works through a web browser.<br />

                            </p> */}

                            <video
                                autoPlay
                                muted
                                defaultMuted
                                loop
                                playsInline
                                width="100%"
                            >
                                <source src={resumeGenerator} type="video/mp4" className='video' />
                            </video>
                            <div className="mb-3">
                                <span className="badge bg-secondary">Html</span>&nbsp;
                                <span className="badge bg-secondary">CSS</span>&nbsp;
                                <span className="badge bg-secondary">Bootstrap</span>&nbsp;
                                <span className="badge bg-secondary">Javascript</span>&nbsp;
                                <span className="badge bg-secondary">Jquery</span>&nbsp;
                                <span className="badge bg-secondary">PHP</span>&nbsp;
                                <span className="badge bg-secondary">MySQL</span>
                            </div>
                            <a href="https://www.linkedin.com/in/sakshi-thombre-068191326/" className="btn projectLinkdin btn-sm rounded-pill" target="_blank">Linkedin</a> &nbsp;
                            <a href="https://github.com/SakshiThombre/RESUME_GENERATOR " className="btn projectGit btn-sm rounded-pill" target="_blank">GitHub</a>
                        </div>
                    </div>
                </Col>
                <Col className='col-12 col-sm-12 col-md-3 projCol'>
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title  font-weight-bold">AIRBNB Clone</h5>
                            {/* <p className="card-text text-muted small">An Airbnb Clone is a full-stack, two-sided marketplace application that replicates the core functionalities of the original platform, allowing hosts to list properties and  contact the owner and book the property.It is a good way to list your properties.  <br />
                            </p> */}
                            <video
                                autoPlay
                                muted
                                defaultMuted
                                loop
                                playsInline
                                width="100%"
                            >
                                <source src={video4} type="video/mp4" className='video' />
                            </video>
                            <div className="mb-3">
                                <span className="badge bg-secondary">Html</span>&nbsp;
                                <span className="badge bg-secondary">Node.js</span>&nbsp;
                                <span className="badge bg-secondary">CSS</span>&nbsp;
                                <span className="badge bg-secondary">JavaScript</span>&nbsp;
                                <span className="badge bg-secondary">MongoDb</span>&nbsp;
                                <span className="badge bg-secondary">Express</span>&nbsp;
                                <span className="badge bg-secondary">Bootstrap</span>&nbsp;
                            </div>
                            <a href="https://www.linkedin.com/in/sakshi-thombre-068191326/" className="btn projectLinkdin btn-sm rounded-pill" target="_blank">Linkedin</a> &nbsp;
                            <a href="https://github.com/SakshiThombre/Aribnb " className="btn  projectGit btn-sm rounded-pill" target="_blank">GitHub</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Project;