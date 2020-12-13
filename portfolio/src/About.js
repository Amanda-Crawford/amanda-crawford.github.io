import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './Components/HeaderBar';
import Headshot from './Components/Headshot';
import AboutText from './Components/AboutText';
import { Container, Col, Row, Button } from 'react-bootstrap';

function About() {
  return (
    <div className="App">
    <br/>
    <Container>
      <Row>
        <Col sm={4}><Headshot /></Col>
        <Col sm={8}><AboutText /></Col>
      </Row>
    </Container>
    </div>
  );
}

export default About;
