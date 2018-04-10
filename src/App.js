import React, { Component } from 'react';
import { Nav, NavBtn, NavItem, NavLink, NavList } from './components/Nav';
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
      </div>
    );
  }
}

export default App;
