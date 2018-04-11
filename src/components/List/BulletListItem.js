import React from "react";

export const BulletListItem = ({ head, em, children }) =>
  <li>
    {head ? (
      <h5 className="text-faded mb-0">{head}</h5>
    ) : "" }
    {em ? (
      <p className="text-faded mb-0"><em>{em}</em></p>
    ) : ""}
    <p className="text-faded mb-0">
      {children}
    </p>
  </li>;