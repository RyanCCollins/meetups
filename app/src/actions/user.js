import * as T from '../constants/user';

/* Failures */
export const signupFailure = () => ({
  type: T.SIGNUP_FAILURE,
  isFetching: false,
  isAuthenticated: false
});

export const loginFailure = () => ({
  type: T.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false
});

export const logoutFailure = () => ({
  type: T.LOGOUT_FAILURE,
  isFetching: false,
  isAuthenticated: true
});

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

export function signupUser(params) {
  return dispatch => {
    dispatch(signupInitiation(params));
    fakeSignup(params).then((userData) => {
      dispatch(signupSuccess(userData));
    }).catch((error) => {
      dispatch({ type: 'DISPLAY_ERROR', error });
      dispatch(signupFailure());
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
      dispatch({ type: 'DISPLAY_ERROR', error });
      dispatch(loginFailure());
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
