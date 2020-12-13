import headshotPhoto from './../Photos/headshot.jpg';
import resume from './../Photos/AmandaCrawford_Resume_fall20.pdf';
import { Container, Col, Row, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const emailaddr = "acrawfor@andrew.cmu.edu"

function Headshot() {
  return (
    <div className="Headshot">
    <Container>
      <Row><Image src={headshotPhoto} alt="A close up headshot photo of Amanda." roundedCircle fluid /></Row>
      <br/>
      <Row>
          <Col><p><a href="https://www.linkedin.com/in/amanda-crawford-430185156/" target="_blank">LinkedIn</a></p></Col>
          <Col><p> <a href="https://github.com/Amanda-Crawford" target="_blank">GitHub</a></p></Col>
      </Row>
      <Row>
          <Col><p> <a href = {resume} target = "_blank">Resume</a></p></Col>
          <Col><p> <a href={`mailto:${emailaddr}`}>Email Me</a></p></Col>
      </Row>
    </Container>
    </div>
  );
}

export default Headshot;
