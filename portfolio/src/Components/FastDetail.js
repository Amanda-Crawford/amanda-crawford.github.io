import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Button, Card, CardGroup, Image, Jumbotron, Breadcrumb } from 'react-bootstrap';

import ScrollAnimation from 'react-animate-on-scroll';

import fastbreak from './../Photos/PortfolioSite.jpg';
import sarah from './../Photos/sarah.png';
import context from './../Photos/context.png';
import final from './../Photos/final.png';
import kstbackground from './../Photos/kstbackground.png';

const bgColorStyle ={backgroundColor: '#3AAFA9'};
const whitebg = {backgroundColor: '#FFFFFF'};


function Projects() {
  return (
    <div>
    <Breadcrumb style={bgColorStyle} >
      <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
      <Breadcrumb.Item active>FastBreak</Breadcrumb.Item>
    </Breadcrumb>
    <Container>
      <Row>
        <h1>FastBreak</h1>
        <p>
          This project focued on doing research to create a new opportunity for Kelly Strayhorn Theater to continue
          operations during COVID-19.
        </p>

        <Image src={fastbreak} fluid alt="A large rendering of the FastBreak Project poster. There is information about the Problem, Method, Evidence and Insights used to create the Solution. Shown are three high fidelity screens of the suggested solution on the bottom of the poster and the information is laid out with Kelly Strayhorn colors of bright pink, yellow, and blue on old school movie ticked banners of color."/>
        <p>
          Above is the final poster from this project. I worked in a team of four students to create and present this poster and a pitch for the end of semester
          User Centered Research and Evaluation Fall 2020 class. We had guests including Carnegie Mellon University Factulty andstakeholders from Kelly Strayhorn Theater
          come see us and ask questions about our idea. Thank you to Kelly Strayhorn Theater and Carnegie Mellon University for the opportunity to work on this project and hopefully our work can
          benefit the KST commuity.
        </p>
      </Row>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Row>
          <Col>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUpBig" animateOnce="true">
              <Image src={context} alt="A screenshot of a form that is titled Context and Change with some notes written on it about the project problem space." fluid />
            </ScrollAnimation>
          </Col>
          <Col>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUpBig" animateOnce="true" >
              <p>Kelly Strayhorn Theater asked the User Centered Reasearch and Evaluation class at CMU in Fall 2020 to work with them to create new experiences
              they could host during COVID-19. Their theater was greatly affected by closures of regular business and they needed to find a way to adapt and overcome.
              The theater is an experimental project that works with a lot of underrepresented communities to tell their stories. The goal for theis project was to
              create an easy to implement project that would increase the amount of people KST reaches during the pandemic, give them great content that KST is known
              for, and drive more people to donate to help suppor the theater during these trying times.</p>
            </ScrollAnimation>
          </Col>
        </Row>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Row>
          <Col>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUpBig" animateOnce="true" >
              <p>Reasearch about the problem and solution spaces really drove this project. We started with researching who KST is and what they mean to the community as well
              as how they are currently serving people in the East Liberty area of Pittsburgh. From our findings, we learned that the East Liberty Areas of Pittsburgh, PA has
              been negatively affected in the past but is going through a revival and the Kelly Strayhorn Theater is a community centerpoint for the arts. KST provides spaces
              for a diverse group of innovative artists. In addition to this, KST strives to be accessible or all and needs to find a way to continue providing high quality
              content at a low cost for their community.
              </p>
            </ScrollAnimation>
          </Col>

          <Col>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUpBig" animateOnce="true" >
              <Image src={kstbackground} alt="A photo of three articles used to conduct research on the Kelly Strayhorn Theater. One article is the history of the East Liberty area with an old photo of the area, another features a picture of a Black Artist from East liberty. Finally, the last is a photo from the KST goals document outlining their commitments for the year."fluid />
            </ScrollAnimation>
          </Col>
        </Row>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Row>
          <Col>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUpBig" animateOnce="true" >
              <Image src={sarah} alt="A screenshot of a paper prototyping interview done through zoom. There is a large portion of the screen showing a virtually sketched, low fidelity prototype of KST Fast Browse showing a single blank square representing a video about Jazz Basics and some other blank squares that represent other recommended videos. On the far right of the photo there are three people as seen through their web cameras conducting the interview." fluid />
            </ScrollAnimation>
          </Col>
          <Col>
          <ScrollAnimation animateIn="animate__animated animate__fadeInUpBig" animateOnce="true" >
          <p> Throughout the semester, our team conducted remote user testing to find customer needs that aligned with the KST's mission. Our users were those who considered
          themselves already active within the Performing Arts Community. I lead four rounds of user testing and supported all of my teammates as a note taker when they also
          conducted user interviews. We started with Think-aloud interviews for Generative Research to find possible solution spaces we could explore. From there, we made a
          protocol for a virtual contextual interview to see how users are currently interacting with online performing arts platforms. From this, we learned users want to
          be able to fit time with the arts in their breaks during the day.
          </p>
          <p> With this information, we created a low fidelity model of what could be as seen to the left where users could interact with short form content from Kelly Strayhorn.
          We tested this idea and a few others with storyboarding before moving on to higher fidelity versons of our idea, KST Fast Break.
          </p>
          </ScrollAnimation>
          </Col>
        </Row>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Row>
          <Col>
            <ScrollAnimation animateIn="animate__animated animate__fadeInUpBig" animateOnce="true" >
              <p>Fast break is an added tab to the Kelly Strayhorn Theater website which redirects viewers to a page full of quick content that instantly connects them to the theater.
              It provides free, high quality content that is educational, always available, and inclusive. Here, viewers can quickly find and watch short form content. This provides
              value because no other theater company is this accessible to people in their daily lives.
              </p>
              <p>
              We also found that younger audiences want to feel deeply connected to the theater and content creators before they donate to them. So, we introduced both Venmo and Paypal
              options for donating in addition to the on-site donation page so that we give these viewers the ability to see where their donations are going, allow them to support their
              favorite content creators and make this content possible for the entire KST community.
              </p>
            </ScrollAnimation>
          </Col>

          <Col>
          <ScrollAnimation animateIn="animate__animated animate__fadeInUpBig" animateOnce="true" >
            <Image src={final} alt="A high Fidelity prototype of the screen shown in the last image. A screenshot of six dancers is showing as a video to play under the KST Fast Break tab with different time filters available to use. There is information about the video as well options to follow the creator, donate to her, or donate to the Theater directly. On the far right of the screen is a column of video screenshots under the title Recommended."fluid />
            </ScrollAnimation>
          </Col>
        </Row>
        <br/><br/><br/>
    </Container>


    </div>
  );
}

export default Projects;
