import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBar from './Components/HeaderBar';
import Projects from './Components/Projects';
import About from './About';
import Skills from './Components/Skills';
import FastDetail from './Components/FastDetail';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
    <Router>
      <HeaderBar />

      <Switch>
            <Route exact path="/">
                <About />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route path="/projects/fastbreak">
                <FastDetail />
            </Route>
            <Route path="/skills">
                <Skills />
            </Route>
            <Route path="*">
              <div> 404 </div>
            </Route>
        </Switch>

    </Router>
    </div>
  );
}

export default App;
