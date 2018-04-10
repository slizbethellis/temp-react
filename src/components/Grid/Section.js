import React from 'react';
import "./Grid.css";

export const Section = ({ bg, color, children }) =>
  <section className={`content-section ${bg ? bg : ""} ${color ? color : ""}`}>
    {children}
  </section>;