import * as T from 'constants/errors';

const errors = (state = [], action) => {
  switch (action.type) {
    case T.ADD_ERROR:
      return [
        ...state,
        action.error
      ];
    case T.REMOVE_ERROR:
      return state.filter((error) => error !== action.error);
    default:
      return state;
  }
};


export default errors;
