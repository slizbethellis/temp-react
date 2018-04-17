import React, { Component } from "react";
import { FaChain, FaCodeFork } from 'react-icons/lib/fa';
import { Col } from '../Grid';
import './Portfolio.css';

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBtns: false
    }
    this.update = this.update.bind(this);
  }

  update = () => {
    this.setState({ showBtns: !this.state.showBtns })
  }

  render() {
    return (
      <Col size="lg-6">
        <div className="portfolio-item" onMouseEnter={this.update} onMouseLeave={this.update}>
          <span className="caption">
            <span className="caption-content">
              {this.state.showBtns ? (
                <div>
                  {this.props.github ? (<a className="btn btn-outline-light rounded" href={this.props.github} target="_blank" rel='noopener noreferrer'>GitHub <FaCodeFork /></a>) : ""}
                  {this.props.website ? (<a className="btn btn-outline-light rounded" href={this.props.website} target="_blank" rel='noopener noreferrer'>Website <FaChain /></a>) : ""}
                </div>
              ) : ""}
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