import React from 'react';
import styles from './LoadingIndicator.module.scss';
import Spinner from 'react-spinkit';

const LoadingIndicator = ({
  isLoading,
  children
}) => (
  <div className={styles.fullScreenContainer}>
    <Spinner className={styles.spinner} spinnerName='three-bounce' />
    {children}
  </div>
);

export default LoadingIndicator;
