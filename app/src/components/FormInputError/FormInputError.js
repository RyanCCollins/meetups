import React from 'react';

const FormInputError = ({
  input
}) => (
  <span id={`${input.name}Error`} className="error">
    {input.error}
  </span>
);

FormInputError.propTypes = {
  input: React.PropTypes.object.isRequired
};

export default FormInputError;
