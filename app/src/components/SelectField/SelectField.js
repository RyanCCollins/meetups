import React, { PropTypes } from 'react';

const SelectField = (props) => (
  <div className="form-group">
    <select {...props}>
      {props.options.map((opt, i) =>
        <option key={i} value={opt.value}>{opt.name}</option>
      )}
    </select>
  </div>
);

SelectField.propTypes = {
  options: PropTypes.array.isRequired
};

export default SelectField;
