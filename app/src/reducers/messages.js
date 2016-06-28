import initialState from '../store/initialState';
import * as T from '../constants/user';

const meetups = (state, action) => {
  switch (action.type) {
    case T.DISPLAY_MESSAGE:
      return [...action.messages];
    case T.DISMISS_MESSAGE:
    default:
      return state || initialState.messages.meetups;
  }
};

export default meetups;
