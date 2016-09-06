import React, { PropTypes } from 'react';
import FormField from 'grommet/components/FormField';
import styles from './SelectField.module.scss';
import cssModules from 'react-css-modules';

const SelectField = (props) => (
  <FormField className={styles.selectField}>
    <select {...props}>
      {props.options.map((opt, i) =>
        <option key={i} value={opt.value}>{opt.name}</option>
      )}
    </select>
  </FormField>
);

SelectField.propTypes = {
  options: PropTypes.array.isRequired
};

export default cssModules(SelectField, styles);
