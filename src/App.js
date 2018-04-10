import React, { Component } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Nav, NavBtn, NavItem, NavLink, NavList } from './components/Nav';
import Masthead from './components/Masthead';
import { Col, Container, Row, Section } from './components/Grid';
import { HorizSlide } from './components/Animate';
import ScrollBtn from './components/ScrollBtn';
import { FaBars, FaClose } from 'react-icons/lib/fa';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.update = this.update.bind(this);
  }

  update = event => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        <NavBtn onClick={this.update}>
          {this.state.isOpen ? (
            <FaClose />
          ) : (
              <FaBars />
            )}
        </NavBtn>

        <HorizSlide
          timeout={400}
          classNames="sidebar"
          shouldShow={this.state.isOpen}>
          <Nav>
            <NavList>
              <NavItem>
                <NavLink href="#page-top">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">Education and Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.dropbox.com/s/ji8n9wwfrrzf32u/Sarah%20Ellis.pdf?dl=0">Resume</NavLink>
              </NavItem>
            </NavList>
          </Nav>
        </HorizSlide>

        <Masthead>
          <h1 className="mb-1">Sarah Ellis</h1>
          <h3 className="mb-5">
            <em>Full Stack Web Developer</em>
          </h3>
          <ScrollBtn to="about" color="primary">Learn More About Me</ScrollBtn>
        </Masthead>

        <Element name="about">
          <Section bg="bg-light" id="about">
            <Container>
              <Row>
                <Col size="lg-10" align="center" color="dark">
                  <h1 className="mb-5">About</h1>
                  <p>I have recently finished a 24 week Coding Boot Camp program in full stack developement at University of Kansas - Edwards Campus. I consider myself equally comfortable on the frontend and backend...versatility has always been one of my biggest strengths. My previous education includes foreign languages and biological sciences. I still have a strong interest in languages and biology, and an ideal position for me would include elements of all three. I take my hobbies very seriously, as evidenced by having several of my original patterns published in major knitting magazines, such as Knitscene and Knitty. Although pattern design does involve creative skills, there is also technical skill required in writing a pattern that others can work from. Much like code, if there is a syntax error or a math error in the instructions, it could potentially make a pattern impossible to use.</p>
                  <ScrollBtn to="skills" color="dark">What I Can Do</ScrollBtn>
                </Col>
              </Row>
            </Container>
          </Section>
        </Element>

        <Element name="skills">

        </Element>
      </div>
    );
  }
}

export default App;
