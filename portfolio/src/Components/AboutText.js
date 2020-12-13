import React, { useState, useEffect } from 'react';

import {Fade, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollAnimation from 'react-animate-on-scroll';

function AboutText() {
  const [open, setOpen] = useState(false);

  return (
    <div className="AboutText">
      <h1>Hi! I'm Amanda Crawford</h1>

      <h3>I am a developer, researcher, designer and current MHCI Student at Carnegie Mellon University.
      My aim is to use user centered principles to create great technologies.</h3>
      <br/>


      <ScrollAnimation animateIn="fadeIn">


          <p>First and foremost, I am a developer. I graduated June 2020 with my Bachelor of Science in Computer Science from Oregon State University where I focused
          in Human Conputer Interaction. My undergraduate specialty allowed me to explore a range of topics including Usability Engineering, Web Development,
          Android Mobile Development, Cloud Development. I also recieved a well rounded software development education with Algorithms, Database Managment,
          Operating Systems and Software Engineering Classes. Althought I liked all of my time at Oregon State, I most enjoyed my Usability and Inclusive Design Classes
          which made me decided to persue a Master's Degree directly after my graduation.

          </p>

          <p> In of Fall 2020, I moved from Portland, Oregon, to the Pittsburgh area to do my Master of Human Computer Interaction at Carnegie Mellon University. My goal
          for this 1 year Master's program is to expand my understanding of the User Experience field and explore topics at a deeper level. I just finished my Fall semester
          where I delved deeper into topics like User Research and Evaluation, Interaction Design, Persuasive Design, and Programming of User Interfaces. These classes
          are providing me with a well balanced background for all stages of software development from Research, to Design, to Development while keeping users at the
          forefront of all my work.
          </p>

          <p> My past work experiences have been with Intel in Summer 2018 and American Experess in Summer 2019. Both internships were for Software Engineering and helped
          me develop my skills working on small, agile scrum teams to create products. At Intel, I was in charge of optimizing an internal testing script for a 5G modem using
          Python libraries. By the end of the summer, I had created a testing environment that ran in parallel threads to decrease testing runtime. At American Express, I
          worked on a distributed communication system and built the React front end that tracked customer data through from input to the sharded database. My React App was
          crucial for verification of the work my teammates were doing. Both of these internships helped me develop my software engineering skills as well as cemented the
          fact in my mind that I wanted to create software that is human centered.
          </p>

          <p> Outside of both school and work, I enjoy being outside, spending time with my friends and family, and hanging out with my dog. Being from Portland, Oregon,
          I'ge gotten used to being out in the rain and will drag anyone I can outside with me (little yellow raincoat included for my dog Cj!) to go for a walk or just
          enjoy the rain. If nobody can come with, then I love to have a cup of coffee or tea in front of a partially open window to hear the raindrops come down around me.
          </p>

      </ScrollAnimation>
    </div>
  );
}

export default AboutText;
