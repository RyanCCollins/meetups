import * as T from '../constants/errors';

export const signupFailure = (errors) => ({
  type: T.SIGNUP_FAILED,
  isFetching: false,
  isAuthenticated: false,
  errors
});

export const loginFailure = (errors) => ({
  type: T.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  errors
});

export const logoutFailure = (errors) => ({
  type: T.LOGOUT_FAILURE,
  isFetching: false,
  isAuthenticated: true,
  errors
});
