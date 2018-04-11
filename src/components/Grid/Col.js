import React from "react";

export const Col = ({ size, align, color, margin, children }) =>
  <div className={`${size.split(" ").map(size => "col-" + size).join(" ")} text-${align} t-${color} ${margin}`}>
    {children}
  </div>;