import React from "react";

export const Row = ({ fluid, gutters, children }) =>
  <div className={`row${fluid ? "-fluid" : ""} ${gutters}`}>
    {children}
  </div>;