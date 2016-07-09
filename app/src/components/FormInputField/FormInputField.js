import React, { PropTypes } from 'react';
import { inputHasError } from '../../utils/misc';
import FormInputError from '../FormInputError/FormInputError';

const FormInputField = ({
  field,
  labelText,
  inputType,
  placeholder
}) => (
  <div className="form-group">
    <div className="floating-label">
      <label
        className={inputHasError(field) && 'error'}
        htmlFor={field.name}
      >
        {labelText}
      </label>
      <input
        {...field}
        type={inputType || 'text'}
        required
        className={inputHasError(field) && 'error'}
        aria-invalid={field.error !== null}
        id={field.name}
        name={field.name.replace('Input', '')}
        placeholder={placeholder || ''}
      ></input>
      {inputHasError(field) &&
        <FormInputError input={field} />
      }
    </div>
  </div>
);

FormInputField.propTypes = {
  field: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string
};

export default FormInputField;
