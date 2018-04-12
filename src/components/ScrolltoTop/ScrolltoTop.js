import React, { Component } from 'react';
import { Events, animateScroll as scroll } from 'react-scroll';
import { FaAngleUp } from 'react-icons/lib/fa';
import './ScrolltoTop.css';

class ScrolltoTop extends Component {

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

  render() {
    return (
      <button className="scroll-to-top rounded" onClick={() => this.scrollToTop()}>
        <FaAngleUp />
      </button>
    );
  }
}

export default ScrolltoTop;