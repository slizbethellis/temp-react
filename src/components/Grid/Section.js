import React from 'react';
import "./Grid.css";

export const Section = ({ color, children }) =>
  <section className={`content-section ${color ? color : ""}`}>
    {children}
  </section>;