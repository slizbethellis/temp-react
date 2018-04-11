import React, { Component } from "react";
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo = name => {
    if (this.props.to === "top") {
      this.scrollToTop();
    }
    else {
      scroller.scrollTo(name, {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuint'
      });
    } 
  }
  
  render() {
    return (
      <Link activeClass="active"
        to={`${this.props.to}`}
        onClick={() => this.scrollTo(this.props.to)}
      >
        {this.props.children}
      </Link>
    );
  }
}

export default NavLink;