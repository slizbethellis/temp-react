import React from "react";
import { FaChain, FaCodeFork } from 'react-icons/lib/fa';
import { Col } from '../Grid';
import './Portfolio.css';

export const PortfolioItem = ({ projectTitle, github, website, technologies, description, img, imgAlt }) =>
  <Col size="lg-6">
    <div className="portfolio-item">
      <span className="caption">
        <span className="caption-content">
          <div className="btn-box">
            {github ? (<a className='btn btn-outline-light rounded' href={github} target="_blank" rel='noopener noreferrer'>GitHub <FaCodeFork /></a>) : ""}
            {website ? (<a className='btn btn-outline-light rounded' href={website} target="_blank" rel='noopener noreferrer'>Website <FaChain /></a>) : ""}
          </div>
          <h2>{projectTitle}</h2>
          <p className="mb-0">
            <small><em>{technologies}</em></small>
          </p>
          <p className="mb-0">
            <small>{description}</small>
          </p>
        </span>
      </span>
      <img className="img-fluid" src={img} alt={imgAlt} />
    </div>
  </Col>;