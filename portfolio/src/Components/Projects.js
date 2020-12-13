import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Card, CardGroup } from 'react-bootstrap';
import fastbreak from './../Photos/PortfolioSite.jpg';
import activist from './../Photos/activist.jpg';
import geagle from './../Photos/geagle.png';
import smsb from './../Photos/smsb.png';
import brew from './../Photos/brew.png';
import movie from './../Photos/movie.png';
const bgColorStyle ={backgroundColor: '#3AAFA9'};


function Projects() {
  return (
    <div>
    <br />
    <h2 className="mx-auto" >Projects</h2>
    <br />

    <Container>
    <Row>
      <Col>
        <Row><h3 className="mx-auto">Programming</h3></Row>
        <Row>
          <Card className="mx-auto m-3" border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={brew} alt="A screenshot from GitHub showing a small portion of the repository for the Brew Review Project."/>
            <Card.Body>
              <Card.Title>Brew Review</Card.Title>
              <Card.Text>
                Programming, Android Development, Java, APIs
              </Card.Text>
              <Button variant="info" bg="#3AAFA9" style={bgColorStyle} href='/projects/fastbreak'>Learn More</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card className="mx-auto m-3" border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie} alt="A screenshot of the README file for the Movie Database Search Project."/>
            <Card.Body>
              <Card.Title>Movie Search</Card.Title>
              <Card.Text>
                Development, React, APIs, Design
              </Card.Text>
              <Button variant="info" bg="#3AAFA9" style={bgColorStyle} href='/projects/fastbreak'>Learn More</Button>
            </Card.Body>
          </Card>
        </Row>
      </Col>

      <Col>
      <Row><h3 className="mx-auto">Research</h3></Row>
      <Row>
        <Card className="mx-auto m-3" border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={fastbreak} alt="A poster showing the overview of the FastBreak project including text and high fidelity renderings of the site pages."/>
          <Card.Body>
            <Card.Title>Fast Break</Card.Title>
            <Card.Text>
              User Research, Prototyping, Visual Design, Figma
            </Card.Text>
            <Button variant="info" bg="#3AAFA9" style={bgColorStyle} href='/projects/fastbreak'>Learn More</Button>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card className="mx-auto m-3" border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={geagle} alt="A screenshot of Apple watch rednerings of a grocery store app."/>
          <Card.Body>
            <Card.Title>G-Eagle Maps</Card.Title>
            <Card.Text>
              User Research, Prototyping, Interaction Design, Figma
            </Card.Text>
            <Button variant="info" bg="#3AAFA9" style={bgColorStyle} href='/projects/fastbreak'>Learn More</Button>
          </Card.Body>
        </Card>
      </Row>
      </Col>

      <Col>
      <Row><h3 className="mx-auto">Design</h3></Row>
      <Row>
        <Card className="mx-auto m-3" border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={activist} alt="A photo of a website showing a virtual rendering of the CMU campus and a title of CMU Against Ice. There are notifications and tasks on this page too."/>
          <Card.Body>
            <Card.Title>Activist Assistant</Card.Title>
            <Card.Text>
              User Research, Interaction Design, Gamification
            </Card.Text>
            <Button variant="info" bg="#3AAFA9" style={bgColorStyle} href='/projects/fastbreak'>Learn More</Button>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card className="mx-auto m-3" border="secondary" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={smsb} alt="A photo of a webpage calling for proposals for an event called Shall Make, Shall Be: The Bill of Rights at Play. There is submisison information and a photo of a Washington, DC Capitol Building."/>
          <Card.Body>
            <Card.Title>Shall Make, Shall Be</Card.Title>
            <Card.Text>
              Typography, Color Theory, Visual Design
            </Card.Text>
            <Button variant="info" bg="#3AAFA9" style={bgColorStyle} href='/projects/fastbreak'>Learn More</Button>
          </Card.Body>
        </Card>
      </Row>
      </Col>
      </Row>
    </Container>

    </div>
  );
}

export default Projects;
