import React from "react";
import './RoundObjects.css';

export const ButtonCircle = ({ href, children }) =>
  <a className="social-link rounded-circle text-white mr-3" href={`${href}`} target="_blank" rel='noopener noreferrer'>
    {children}
  </a>;