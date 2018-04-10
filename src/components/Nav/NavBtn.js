import React from "react";
import "./Nav.css";

export const NavBtn = props => 
  <button {...props} className="menu-toggle rounded">
    {props.children}
  </button>;