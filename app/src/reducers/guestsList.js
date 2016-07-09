import * as T from '../constants/guestsList';

const guestsList = (state = [], action) => {
  switch (action.type) {
    case T.ADD_GUEST:
      return [
        ...state,
        action.guest
      ];
    case T.REMOVE_GUEST:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

export default guestsList;
