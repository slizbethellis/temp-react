import React from "react";
import './RoundObjects.css';

export const Headshot = ({ src, alt }) =>
  <img className="rounded-circle img-fluid headshot" src={`${src}`} alt={`${alt}`} />;