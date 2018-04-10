import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Animate = ({shouldShow, timeout, classNames, children}) => {
  return (
    <CSSTransition
      timeout={timeout}
      classNames={classNames}
      in={shouldShow}>
      {children}
    </CSSTransition>
  );
}

export default Animate;