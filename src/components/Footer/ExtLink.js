import React from "react";

export const ExtLink = ({ href, children }) =>
  <a href={`${href}`} target="_blank" rel='noopener noreferrer'>
    {children}
  </a>;