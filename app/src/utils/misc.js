
/**
 * @function inputHasError
 * @description determine if the given input has an error
 * @param {input} - the form input field to check for errors.
 * @return bool - whether the input has an error or not.
 */
export const inputHasError = (input) =>
  input.touched && input.error;
