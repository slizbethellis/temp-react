import React from "react";
import './List.css';

export const BulletList = ({ children }) =>
  <div className="ml-5">
    <ul>
      {children}
    </ul>
  </div>;