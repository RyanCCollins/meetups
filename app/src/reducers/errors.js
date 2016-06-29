import * as T from 'constants/errors';

const errors = (state = [], action) => {
  switch (action.type) {
    case T.DISPLAY_ERROR:
      return [
        ...state,
        action.error
      ];
    case T.DISPLAY_ERRORS:
      return [
        ...state,
        ...action.errors
      ];
    case T.REMOVE_ERROR:
      return state.filter((error) => error !== action.error);
    default:
      return state;
  }
};


export default errors;
