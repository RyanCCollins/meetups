import * as T from '../constants/user';

export default const signup = (state, action) => {
  switch (action.type) {
    case T.
    default:

  }
}

export default function posts(state = {
  myModel: []
}, action) {
  switch (action.type) {
    case DISPLAY_ERROR:
      return Object.assign(state, {
        myModel: [...action.error]
      });
    default:
      return state;
  }
}
