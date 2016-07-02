import * as T from '../constants/meetups';

const meetups = (state = {
  isFetching: false,
  data: []
}, action) => {
  switch (action.type) {
    case `${T.GET_MEETUPS}_PENDING`:
      return Object.assign({}, state, {
        isFetching: true
      });
    case `${T.GET_MEETUPS}_FULFILLED`:
      console.log("data received ", action.payload)
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload
      });
    case `${T.CREATE_MEETUP}_PENDING`:
      return Object.assign({}, state, {
        isFetching: true
      });
    case `${T.CREATE_MEETUPS}_FULFILLED`:
      return Object.assign({}, state, {
        isFetching: false,
        data: [...state.data, action.payload]
      });
    default:
      return state;
  }
};

export default meetups;
