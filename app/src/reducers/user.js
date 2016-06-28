import initialState from '../store/initialState';
import * as T from '../constants/user';

const user = (state = {
  isFetching: false,
  isAuthenticated: false,
  authToken: null,
  signupData: {},
  credentials: {}
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
        authToken: action.authToken
      });
    case T.SIGNUP_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errors: action.errors
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
        isAuthenticated: false,
        errors: action.errors
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
        isAuthenticated: false,
        errors: action.errors
      });
    default:
      return state;
  }
};

export default user;
