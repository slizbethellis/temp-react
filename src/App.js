import React, { Component } from 'react';
import { Nav, NavBtn, NavItem, NavLink, NavList } from './components/Nav';
import Masthead from './components/Masthead';
import Animate from './components/Animate';
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

        <Animate
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
        </Animate>

        <Masthead>
          <h1 class="mb-1">Sarah Ellis</h1>
          <h3 class="mb-5">
            <em>Full Stack Web Developer</em>
          </h3>
          <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Learn More About Me</a>
        </Masthead>
      </div>
    );
  }
}

export default App;
