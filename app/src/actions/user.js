import * as T from '../constants/user';

/* User signup */
export const signupInitiation = (signupData) => ({
  type: T.SIGNUP_INITIATION,
  isFetching: true,
  isAuthenticated: false,
  signupData
});

export const signupSuccess = (userData) => ({
  type: T.SIGNUP_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  authToken: userData.authToken,
  profileData: userData
});

const fakeOdds = () => {
  return Math.floor(Math.random() * (20 - 1)) + 1;
};

const fakeSignup = (signupData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fakeOdds() % 2 !== 0) {
        const userData = { authToken: 'DJKSDFKEIUwr3JFKSKSE' };
        resolve(userData);
      } else {
        reject('An unknown error occured');
      }
    }, 2000);
  });
};

export function signupUser(signupData) {
  return dispatch => {
    dispatch(signupInitiation(signupData));
    fakeSignup(sigupData).then((userData) => {
      dispatch(signupSuccess(userData));
    }).catch((error) => {
      const errors = [];
      errors.push(error);
      dispatch(signupFailure(errors));
    });
  };
}

/* Login to the server */
export const loginInitiation = (credentials) => ({
  type: T.LOGIN_INITIATION,
  isFetching: true,
  isAuthenticated: false,
  credentials
});

export const loginSuccess = (userData) => ({
  type: T.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  authToken: userData.authToken,
  profileData: userData
});

const fakeLogin = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fakeOdds() % 2 !== 0) {
        const userData = { authToken: 'DJKSDFKEIUwr3JFKSKSE' };
        resolve(userData);
      } else {
        reject('An unknown error occured');
      }
    }, 2000);
  });
};

export function loginUser(credentials) {
  return dispatch => {
    dispatch(loginInitiation(credentials));
    fakeLogin(credentials).then((userData) => {
      localStorage.setItem('authToken', userData.authToken);
      dispatch(loginSuccess(userData));
    }).catch((error) => {
      const errors = [];
      errors.push(error);
      dispatch(loginFailure(errors));
    });
  };
}

export const logoutInitiation = () => ({
  type: T.LOGOUT_INITIATION,
  isFetching: true,
  isAuthenticated: true
});

export const logoutSuccess = () => ({
  type: T.LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false
});

export function logoutUser() {
  return dispatch => {
    dispatch(logoutInitiation());
    localStorage.removeItem('authToken');
    dispatch(logoutSuccess());
  };
}

/* Errors */
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
