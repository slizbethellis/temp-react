import React, { Component } from 'react';
import { Events, animateScroll as scroll } from 'react-scroll';
import { FaAngleUp } from 'react-icons/lib/fa';
import { Animate } from '../Animate';
import './ScrolltoTop.css';

class ScrolltoTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstScroll: false,
      showBtn: false
    }
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    this._setCurrentSection();
    window.addEventListener('scroll', this._setCurrentSection);
  }
 
  componentWillUnmount() {
    window.removeEventListener('scroll', this._setCurrentSection);
  }

  _setCurrentSection = () => {
    let showBtn = this.state.showBtn;
    let firstScroll = this.state.firstScroll;
    if (window.pageYOffset > 100) {
      showBtn = true;
      firstScroll = true;
    }
    else { showBtn = false; }
    this.setState({ showBtn: showBtn, firstScroll: firstScroll });
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <Animate
        timeout={400}
        classNames="btnFade"
        shouldShow={this.state.showBtn}>
        <button className={`scroll-to-top rounded ${this.state.firstScroll ? "" : "d-none"}`} onClick={() => this.scrollToTop()}>
          <FaAngleUp />
        </button>
      </Animate>
    );
  }
}

export default ScrolltoTop;