import React, { PropTypes } from 'react';
import { inputHasError } from '../../utils/misc';
import FormInputError from '../FormInputError/FormInputError';

const FormInputField = ({
  field,
  labelText,
  inputType
}) => (
  <div className="form-group">
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
      placeholder={labelText}
    ></input>
    {inputHasError(field) &&
      <FormInputError input={field} />
    }
  </div>
);

FormInputField.propTypes = {
  field: PropTypes.object.isRequired,
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string
};

export default FormInputField;
