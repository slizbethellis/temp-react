import React from "react";
import "./Masthead.css";

const Masthead = ({ children }) =>
  <header className="masthead d-flex">
    <div className="container text-center t-light my-auto">
      {children}
    </div>
  </header>;

export default Masthead;