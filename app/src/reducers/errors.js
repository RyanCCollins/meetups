import { combineReducers } from 'redux';
import * as T from 'constants/user';

const signup = (state = [], action) => {
  switch (action.type) {
    case T.SIGNUP_FAILURE:
      return [...action.errors];
    default:
      return state;
  }
};

const login = (state = [], action) => {
  switch (action.type) {
    case T.LOGIN_FAILURE:
      return [...action.errors];
    default:
      return state;
  }
};

const logout = (state = [], action) => {
  switch (action.type) {
    case T.LOGOUT_FAILURE:
      return [...action.errors];
    default:
      return state;
  }
};

export default combineReducers({
  signup,
  login,
  logout
});
