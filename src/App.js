import React, { Component } from 'react';
import { Nav, NavBtn, NavItem, NavLink, NavList,  } from "./components/Nav";
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <NavBtn />
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
      </div>
    );
  }
}

export default App;
