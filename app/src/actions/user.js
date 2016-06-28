import * as T from '../constants/user';

export const submitSignup = (user) => ({
  type: T.SIGNUP_INITIATED,
  user
});

export const signupSuccess = () => ({
  type: T.SIGNUP_SUCCESS
});

export const signupFailure = (error) => ({
  type: T.SIGNUP_FAILED,
  errors: [error]
});
