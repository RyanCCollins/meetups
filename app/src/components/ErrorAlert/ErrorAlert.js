import React, { PropTypes } from 'react';
import styles from './ErrorAlert.module.scss';
import cssModules from 'react-css-modules';

const ErrorAlert = ({
  errors,
  headerText
}) => (
  <div className={styles.container}>
    <div className="alert callout" data-closable>
      <h5>{headerText}</h5>
      <ul className="no-bullet">
        {errors.map((error) => <li>{error}</li>)}
      </ul>
      <button className="close-button" aria-label="Dismiss alert" type="button" data-close>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
);

ErrorAlert.propTypes = {
  errors: PropTypes.array.isRequired,
  headerText: PropTypes.string
};

export default cssModules(ErrorAlert, styles);
