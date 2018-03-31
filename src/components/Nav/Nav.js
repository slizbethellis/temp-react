import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import "./Nav.css";

export const Nav = ({ children }) =>
  <CSSTransitionGroup
    transitionName="sidebar"
    transitionAppear={true}
    transitionAppearTimeout={400}
    transitionEnterTimeout={400}
    transitionLeaveTimeout={400}>
    <nav id="sidebar-wrapper">
      {children}
    </nav>
  </CSSTransitionGroup>;