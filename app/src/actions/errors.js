import * as T from '../constants/errors';

export const displayError = (error) => ({
  type: T.DISPLAY_ERROR,
  error
});

export const displayErrors = (errors) => ({
  type: T.DISPLAY_ERRORS,
  errors
});

export const removeError = (error) => ({
  type: T.REMOVE_ERROR,
  error
});

export const clearErrors = () => ({
  type: T.CLEAR_ERRORS
});
