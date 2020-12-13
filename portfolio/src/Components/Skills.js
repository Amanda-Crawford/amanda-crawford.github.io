import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Card, CardGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const tealIcon = {color: '#3AAFA9'};
const whiteIcon = {color: '#ffffff'};

const renderProgSkillsTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    These are concepts I feel very comfortable working with and have completed multiple classes and projects surrounding the topics listed.
  </Tooltip>
);

const renderResearchTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    The skills listed here have been learned and practiced in a mostly remote environment with a small team while completing course projects.
  </Tooltip>
);

const renderDesignTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Skills here are newer and I am most comfortable in low to mid fidelity settings where the design focus is on the usability and the interactions being designed.
  </Tooltip>
);


function Projects() {
  return (
    <div>
    <br/>
    <h2 className="mx-auto" >Skills</h2>
    <br /> <br/> <br /> <br/> <br /> <br/>

    <ScrollAnimation animateIn="fadeIn">
      <Container >
        <Row className="mx-auto">
          <h3>Programming Skills</h3>

          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderProgSkillsTooltip}
          >
            <FontAwesomeIcon icon={faInfoCircle} size="md"/>
          </OverlayTrigger>
        </Row>
        <br/>
          <Row className="mx-auto">
            <Col className="mx-auto animate__animated animate__slideInLeft">HTML 5</Col>
            <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
            <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s" > <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
            <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
            <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
            <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStarHalfAlt} size="2x"/> </Col>
          </Row>
          <br/>
        <Row className="mx-auto">
          <Col className="mx-auto animate__animated animate__slideInLeft"s>CSS</Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s" > <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={whiteIcon} icon={faStarHalfAlt} size="2x"/> </Col>
        </Row>
        <br/>
        <Row className="mx-auto">
          <Col className="mx-auto animate__animated animate__slideInLeft">JavaScript</Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s" > <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStarHalfAlt} size="2x"/> </Col>
        </Row>
        <br/>
        <Row className="mx-auto">
          <Col className="mx-auto animate__animated animate__slideInLeft">React.js</Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s" > <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </Col>
        </Row>
        <br/>

        <Row className="mx-auto">
          <Col className="mx-auto animate__animated animate__slideInLeft">Databases</Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s" > <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
          <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </Col>
        </Row>
        <br/>
      <Row className="mx-auto">
        <Col className="mx-auto animate__animated animate__slideInLeft">Mobile Android Development</Col>
        <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
        <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s" > <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
        <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
        <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
        <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </Col>
      </Row>
      <br/>

      <Row className="mx-auto">
        <Col className="mx-auto animate__animated animate__slideInLeft">Cloud Development</Col>
        <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
        <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s" > <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
        <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
        <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </Col>
        <Col className="mx-auto animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStarHalfAlt} size="2x"/> </Col>
      </Row>
      <br/>
      <br/>

      <Row>
        After earning my undergraduate degree in Compuer Science, I feel very comfortable in my programming skills and my ability to apply what I know to new scenarios.
         I have a good understanding of the fundamentals of what good code is and how to write it. My experience includes working in agile, scrum environments
         that work on two week sprint timelines and enjoy the fast pace of these teams. I have a clear understanding that testing drives development and believe
         that my skills in User Experience helps me put humans at the center of everything I build.
      </Row>

      </Container>
    </ScrollAnimation>

    <br/> <br/> <br/>  <br/> <br/> <br/> <br/>  <br/>  <br/>  <br/>
      <Container >
      <ScrollAnimation animateIn="fadeIn">
        <Row className="mx-auto">
          <h3>Research Skills</h3>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderResearchTooltip}
          >
            <FontAwesomeIcon icon={faInfoCircle} size="md"/>
          </OverlayTrigger>
        </Row>
        </ScrollAnimation>
        <br/>
          <Row className="mx-auto">
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Persona Creation & Use</ScrollAnimation> </Col>
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStarHalfAlt} size="2x"/> </ScrollAnimation> </Col>
          </Row>
          <br/>
        <Row className="mx-auto">
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Storyboarding Interviews</ScrollAnimation> </Col>
          <Col className="mx-auto "> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation> </Col>
        </Row>
        <br/>
        <Row className="mx-auto">
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Intercept Interviews</ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto "> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation> </Col>
        </Row>
        <br/>
        <Row className="mx-auto">
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Customer Journey Maps</ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation></Col>
        </Row>
        <br/>

        <Row className="mx-auto">
          <Col className="mx-auto "> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Affinity Diagrams</ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation></Col>
        </Row>
        <br/>
      <Row className="mx-auto">
        <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Experience Prototyping</ScrollAnimation> </Col>
        <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
        <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
        <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
        <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation></Col>
        <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStarHalfAlt} size="2x"/> </ScrollAnimation></Col>
      </Row>
      <br/>

      <Row className="mx-auto">
        <Col className="mx-auto "> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Interviewing Users</ScrollAnimation> </Col>
        <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
        <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
        <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
        <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation></Col>
        <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStarHalfAlt} size="2x"/> </ScrollAnimation></Col>
      </Row>
      <br/> <br/>

      <Row>
        After earning my undergraduate degree in Compuer Science, I feel very comfortable in my programming skills and my ability to apply what I know to new scenarios.
         I have a good understanding of the fundamentals of what good code is and how to write it. My experience includes working in agile, scrum environments
         that work on two week sprint timelines and enjoy the fast pace of these teams. I have a clear understanding that testing drives development and believe
         that my skills in User Experience helps me put humans at the center of everything I build.
      </Row>

      </Container>

    <br/> <br/> <br/>  <br/> <br/> <br/> <br/>  <br/>  <br/>  <br/>

      <Container >
        <ScrollAnimation animateIn="fadeIn">
          <Row className="mx-auto">
            <h3>Design Skills</h3>

            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderDesignTooltip}
            >
              <FontAwesomeIcon icon={faInfoCircle} size="md"/>
            </OverlayTrigger>
          </Row>
        </ScrollAnimation>
        <br/>
          <Row className="mx-auto">
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Figma</ScrollAnimation> </Col>
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
            <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation></Col>
            <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStarHalfAlt} size="2x"/> </ScrollAnimation></Col>
          </Row>
          <br/>
        <Row className="mx-auto">
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Adobe Suite</ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation></Col>
        </Row>
        <br/>
        <Row className="mx-auto">
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Interaction Design</ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStarHalfAlt} size="2x"/> </ScrollAnimation></Col>
        </Row>
        <br/>
        <Row className="mx-auto">
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Typography</ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStarHalfAlt} size="2x"/> </ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation></Col>
        </Row>
        <br/>
        <Row className="mx-auto">
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft"> Photoshop</ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation></Col>
        </Row>
        <br/>

        <Row className="mx-auto">
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__slideInLeft">Graphic Design </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto" > <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={faStar} size="2x"/> </ScrollAnimation> </Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation></Col>
          <Col className="mx-auto"> <ScrollAnimation animateIn="animate__animated animate__rollIn animate__delay-1s"> <FontAwesomeIcon style={tealIcon} icon={regStar} size="2x"/> </ScrollAnimation></Col>
        </Row>
        <br/> <br/>

        <Row>
          After earning my undergraduate degree in Compuer Science, I feel very comfortable in my programming skills and my ability to apply what I know to new scenarios.
           I have a good understanding of the fundamentals of what good code is and how to write it. My experience includes working in agile, scrum environments
           that work on two week sprint timelines and enjoy the fast pace of these teams. I have a clear understanding that testing drives development and believe
           that my skills in User Experience helps me put humans at the center of everything I build.
        </Row>

      </Container>
    <br/>
    <br/>

    </div>
  );
}

export default Projects;
