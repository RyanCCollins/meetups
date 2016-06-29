import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './Modal.module.scss';

const Modal = ({
  children,
  transitionName
}) => (
  <ReactCSSTransitionGroup transitionName={transitionName}>
    <div className={styles.modal}>
      {children}
    </div>
  </ReactCSSTransitionGroup>
);
