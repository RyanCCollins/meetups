import initialState from '../store/initialState';
import * as T from '../constants/user';

const user = (state = {
  isLoading: false
}, action) => {
  switch (action.type) {
    case T.SIGNUP_INITIATION:
      return Object.assign({}, state, {
        isLoading: true
      });
    case T.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        user: action.user
      });
    default:
      return state;
  }
};

export default user;
