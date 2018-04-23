import React, { Component } from "react";
import { FaChain, FaCodeFork } from 'react-icons/lib/fa';
import { Animate } from '../Animate';
import { Col } from '../Grid';
import './Portfolio.css';

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLoad: true,
      showBtns: false
    }
    this.update = this.update.bind(this);
  }

  update = () => {
    let firstLoad = this.state.firstLoad;
    if (firstLoad === true) { firstLoad = false; }
    this.setState({ showBtns: !this.state.showBtns, firstLoad: firstLoad })
  }

  render() {
    return (
      <Col size="lg-6">
        <div className="portfolio-item" onMouseEnter={this.update} onMouseLeave={this.update} onTouchStart={this.update} onTouchEnd={this.update}>
          <span className="caption">
            <span className="caption-content">
              <div className="btn-box">
                <Animate timeout={400}
                  classNames="btnsFade"
                  shouldShow={this.state.showBtns}>
                  <div>
                    {this.props.github ? (<a className={`btn btn-outline-light rounded ${this.state.firstLoad ? "d-none" : ""}`} href={this.props.github} target="_blank" rel='noopener noreferrer'>GitHub <FaCodeFork /></a>) : ""}
                    {this.props.website ? (<a className={`btn btn-outline-light rounded ${this.state.firstLoad ? "d-none" : ""}`} href={this.props.website} target="_blank" rel='noopener noreferrer'>Website <FaChain /></a>) : ""}
                  </div>
                </Animate>
              </div>
              <h2>{this.props.projectTitle}</h2>
              <p className="mb-0">
                <small><em>{this.props.technologies}</em></small>
              </p>
              <p className="mb-0">
                <small>{this.props.description}</small>
              </p>
            </span>
          </span>
          <img className="img-fluid" src={this.props.img} alt={this.props.imgAlt} />
        </div>
      </Col>
    );
  }
}

export default PortfolioItem;