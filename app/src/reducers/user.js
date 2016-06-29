import * as T from '../constants/user';

const user = (state = {
  isFetching: false,
  isAuthenticated: false,
  authToken: null,
  signupData: {},
  profileData: {}
}, action) => {
  switch (action.type) {
    case T.SIGNUP_INITIATION:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        signupData: action.signupData
      });
    case T.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        authToken: action.authToken,
        profileData: action.userData
      });
    case T.SIGNUP_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false
      });
    case T.LOGIN_INITIATION:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        credentials: action.credentials
      });
    case T.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        authToken: action.authToken
      });
    case T.LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false
      });
    case T.LOGOUT_INITIATION:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: true
      });
    case T.LOGOUT_SUCCESS:
      return state;
    case T.LOGOUT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false
      });
    default:
      return state;
  }
};

export default user;
