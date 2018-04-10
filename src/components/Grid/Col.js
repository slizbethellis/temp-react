import React from "react";

export const Col = ({ size, align, color, children }) =>
  <div className={`mx-auto ${size.split(" ").map(size => "col-" + size).join(" ")} text-${align} t-${color}`}>
    {children}
  </div>;