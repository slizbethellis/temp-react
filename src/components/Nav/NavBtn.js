import React, { Component } from "react";
import { FaBars, FaClose } from 'react-icons/lib/fa'

export class NavBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        <button className="menu-toggle rounded" onClick={this.update}>
          {this.state.isOpen ? (
            <FaClose />
          ) : (
              <FaBars />
            )}
        </button>
      </div>
    );
  }
}
