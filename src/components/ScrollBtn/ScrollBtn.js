import React, { Component } from 'react';
import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class ScrollBtn extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }

  scrollTo = name => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuint'
    })
  }
  
  render() {
    return (
      <Link className={`btn btn-${this.props.color} btn-xl`}
        activeClass="active"
        to={`${this.props.to}`}
        onClick={() => this.scrollTo(this.props.to)}
      >
        {this.props.children}
      </Link>
    );
  }
}

export default ScrollBtn;