import React, { PropTypes } from 'react';
import styles from './ErrorAlert.module.scss';
import cssModules from 'react-css-modules';

const ErrorAlert = ({
  errors,
  headerText
}) => (
  <div className={styles.container}>

  </div>
);

ErrorAlert.propTypes = {
  errors: PropTypes.array.isRequired,
  headerText: PropTypes.string
};

export default cssModules(ErrorAlert, styles);
