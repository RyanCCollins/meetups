import * as T from '../constants/errors';

export const displayError = (error) => ({
  type: T.DISPLAY_ERROR,
  error
});

export const removeError = (error) => ({
  type: T.REMOVE_ERROR,
  error
});
