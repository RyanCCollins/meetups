import React, { PropTypes } from 'react';
import styles from './LoadingIndicator.module.scss';
import Spinner from 'react-spinkit';

const isHidingStyle = {
  display: 'none'
};

const isNotHidingStyle = {
  display: ''
};

const LoadingIndicator = ({
  isLoading,
  children
}) => (
  <div>
    <div
      className={styles.fullScreenContainer}
      style={isLoading ? isNotHidingStyle : isHidingStyle}
    >
      <div className={styles.spinnerContainer}>
        <Spinner
          className={styles.spinner}
          spinnerName="three-bounce"
        />
      </div>
    </div>
    {!isLoading && children}
  </div>
);

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default LoadingIndicator;
