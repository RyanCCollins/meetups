import React, { PropTypes } from 'react';
import styles from './FormButtonGroup.module.scss';
import cssModules from 'react-css-modules';
import {
  FaCog,
  FaPaperPlane
} from 'react-icons/lib/fa';
import {
  Button
} from 'react-foundation';

const FormButtonGroup = ({
  submitting,
  resetForm
}) => (
  <div className={styles.buttonGroup}>
    <Button
      isExpanded
      className={styles.marginRight}
      size={'large'}
      disabled={submitting}
    >
      {submitting ?
        <FaCog className="fa-spin" />
      :
        <FaPaperPlane />
      }{' Submit'}
    </Button>
    <Button
      isExpanded
      isHollow
      size={'large'}
      disabled={submitting}
      onClick={resetForm}
      className={styles.buttonMarginLeft}
    >
      Clear Form
    </Button>
  </div>
);

FormButtonGroup.propTypes = {
  submitting: PropTypes.bool.isRequired,
  resetForm: PropTypes.func.isRequired
};

export default cssModules(FormButtonGroup, styles);
