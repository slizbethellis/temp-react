import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Animate } from './components/Animate';
import { ExtLink, Footer, TinyText } from './components/Footer';
import { Col, Container, ContentHeading, Row, Section } from './components/Grid';
import { BulletList, BulletListItem, InlineList, InlineListItem } from './components/List';
import Masthead from './components/Masthead';
import { Nav, NavBtn, NavItem, NavList } from './components/Nav';
import NavLink from './components/NavLink';
import { ButtonCircle, Headshot, IconCircle } from './components/RoundObjects';
import ScrollBtn from './components/ScrollBtn';
import ScrolltoTop from './components/ScrolltoTop';
import { FaBars, FaClose, FaDesktop, FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin, FaServer } from 'react-icons/lib/fa';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      showBtn: false
    }
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this._setCurrentSection();
    window.addEventListener('scroll', this._setCurrentSection);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._setCurrentSection);
  }

  _setCurrentSection = () => {
    let showBtn = this.state.showBtn;
    if (window.pageYOffset > 100) { showBtn = true; }
    else { showBtn = false; }
    this.setState({ showBtn: showBtn });
  }

  update = event => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        {/* NavBar toggle button */}
        <NavBtn onClick={this.update}>
          {this.state.isOpen ? (
            <FaClose />
          ) : (
              <FaBars />
            )}
        </NavBtn>

        {/* Sliding NavBar */}
        <Animate
          timeout={400}
          classNames="sidebar"
          shouldShow={this.state.isOpen}>
          <Nav>
            <NavList>
              <NavItem>
                <NavLink to="top">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="skills">Education and Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <a href="https://www.dropbox.com/s/ji8n9wwfrrzf32u/Sarah%20Ellis.pdf?dl=0" target="_blank" rel='noopener noreferrer'>Resume</a>
              </NavItem>
            </NavList>
          </Nav>
        </Animate>

        {/* Masthead */}
        <Masthead>
          <h1 className="mb-1">Sarah Ellis</h1>
          <h3 className="mb-5">
            <em>Full Stack Web Developer</em>
          </h3>
          <ScrollBtn to="about" color="primary">Learn More About Me</ScrollBtn>
        </Masthead>

        {/* About */}
        <Element name="about">
          <Section color="bg-light" id="about">
            <Container>
              <Row>
                <Col size="lg-10" align="center" color="dark" margin="mx-auto">
                  <h1 className="mb-5">About</h1>
                  <p>I have recently finished a 24 week Coding Boot Camp program in full stack developement at University of Kansas - Edwards Campus. I consider myself equally comfortable on the frontend and backend...versatility has always been one of my biggest strengths. My previous education includes foreign languages and biological sciences. I still have a strong interest in languages and biology, and an ideal position for me would include elements of all three. I take my hobbies very seriously, as evidenced by having several of my original patterns published in major knitting magazines, such as Knitscene and Knitty. Although pattern design does involve creative skills, there is also technical skill required in writing a pattern that others can work from. Much like code, if there is a syntax error or a math error in the instructions, it could potentially make a pattern impossible to use.</p>
                  <ScrollBtn to="skills" color="dark">What I Can Do</ScrollBtn>
                </Col>
              </Row>
            </Container>
          </Section>
        </Element>

        {/* Education and Skills */}
        <Element name="skills">
          <Section color="text-white skills">
            <Container>
              <ContentHeading>
                <h2 className="mb-5">Education and Skills</h2>
              </ContentHeading>
              <Row>
                <Col size="lg-4 md-6" margin="mb-5 mb-lg-0">
                  <IconCircle>
                    <FaGraduationCap />
                  </IconCircle>
                  <h4 className="text-center">
                    <strong>Education</strong>
                  </h4>
                  <ul>
                    <BulletListItem head="March 2018"
                      em="University of Kansas-Edwards Campus">
                      Full Stack Coding Bootcamp
                    </BulletListItem>
                    <BulletListItem head="May 2013"
                      em="Austin Community College (Austin, Texas)">
                      Associate of Arts in Foreign Languages-Spanish
                    </BulletListItem>
                  </ul>
                </Col>
                <Col size="lg-4 md-6" margin="mb-5 mb-lg-0">
                  <IconCircle>
                    <FaDesktop />
                  </IconCircle>
                  <h4 className="text-center">
                    <strong>Front End</strong>
                  </h4>
                  <BulletList>
                    <BulletListItem>HTML5</BulletListItem>
                    <BulletListItem>CSS3</BulletListItem>
                    <BulletListItem>Bootstrap</BulletListItem>
                    <BulletListItem>JavaScript</BulletListItem>
                    <BulletListItem>jQuery</BulletListItem>
                    <BulletListItem>React.js</BulletListItem>
                  </BulletList>
                </Col>
                <Col size="lg-4 md-6" margin="mb-5 mb-lg-0">
                  <IconCircle>
                    <FaServer />
                  </IconCircle>
                  <h4 className="text-center">
                    <strong>Back End</strong>
                  </h4>
                  <BulletList>
                    <BulletListItem>Node.js</BulletListItem>
                    <BulletListItem>Express.js</BulletListItem>
                    <BulletListItem>MySQL/Sequelize</BulletListItem>
                    <BulletListItem>MongoDB/Mongoose</BulletListItem>
                    <BulletListItem>Git/GitHub</BulletListItem>
                  </BulletList>
                </Col>
              </Row>
              <Col size="sm-12" align="center" margin="mx-auto mt-2">
                <ScrollBtn to="portfolio" color="light">Look at My Projects</ScrollBtn>
              </Col>
            </Container>
          </Section>
        </Element>

        {/* Portfolio */}
        <Element name="portfolio">
          <Section>
            <Container>
              <ContentHeading>
                <h3 className="text-secondary mb-0">Portfolio</h3>
                <h2 className="mb-5 t-dark">Recent Projects</h2>
              </ContentHeading>
              <Row>

              </Row>
            </Container>

          </Section>
        </Element>

        {/* Footer/Contact */}
        <Element name="contact">
          <Footer>
            <Container>
              <ContentHeading>
                <h2 className="mb-5">Contact</h2>
                <Col size="lg-3 md-3" margin="mx-auto">
                  <Headshot src="headshot.png" alt="Sarah Ellis" />
                  <h4>Sarah Ellis</h4>
                  <p className="lead">Full Stack Web Developer</p>
                </Col>
              </ContentHeading>
              <Row>
                <Col size="lg-12">
                  <InlineList>
                    <InlineListItem>
                      <ButtonCircle href="https://github.com/slizbethellis/">
                        <FaGithub />
                      </ButtonCircle>
                    </InlineListItem>
                    <InlineListItem>
                      <ButtonCircle href="https://www.linkedin.com/in/slizbethellis/">
                        <FaLinkedin />
                      </ButtonCircle>
                    </InlineListItem>
                    <InlineListItem>
                      <ButtonCircle href="mailto:slizbethellis@gmail.com">
                        <FaEnvelope />
                      </ButtonCircle>
                    </InlineListItem>
                  </InlineList>
                </Col>
              </Row>
              <TinyText>Copyright &copy; Sarah Ellis 2018</TinyText>
              <TinyText>This page is built from React.js components I made based on a <ExtLink href="https://startbootstrap.com/template-overviews/stylish-portfolio/">Start Bootstrap</ExtLink> template.</TinyText>
              <TinyText>And do take a look at my <ExtLink href="https://github.com/slizbethellis/temp-react">GitHub repo</ExtLink> for this portfolio.</TinyText>
            </Container>
          </Footer>
        </Element>

        {/* Scroll to Top Button */}
        <Animate
          timeout={1000}
          classNames="btnFade"
          shouldShow={this.state.showBtn}>
          <ScrolltoTop />
        </Animate>
      </div>
    );
  }
}

export default App;
