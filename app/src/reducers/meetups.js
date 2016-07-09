import * as T from '../constants/meetups';

const meetups = (state = {
  isFetching: false,
  data: [],
  error: null,
  selectedMeetup: {}
}, action) => {
  switch (action.type) {
    case `${T.GET_MEETUPS}_PENDING`:
      return Object.assign({}, state, {
        isFetching: true
      });
    case `${T.GET_MEETUPS}_FULFILLED`:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload
      });
    case `${T.GET_MEETUPS}_REJECTED`:
    console.log("data received ", action.payload)
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload
      });
    case `${T.GET_MEETUP}_PENDING`:
    console.log("data received ", action.payload)
      return Object.assign({}, state, {
        isFetching: true
      });
    case `${T.GET_MEETUP}_FULFILLED`:
      return Object.assign({}, state, {
        isFetching: false,
        data: [...state.data, action.payload]
      });
    case `${T.GET_MEETUP}_REJECTED`:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload
      });
    case `${T.CREATE_MEETUP}_PENDING`:
      return Object.assign({}, state, {
        isFetching: true
      });
    case `${T.CREATE_MEETUP}_FULFILLED`:
      return Object.assign({}, state, {
        isFetching: false,
        data: [...state.data, action.payload]
      });
    case `${T.CREATE_MEETUP}_REJECTED`:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload
      });
    case `${T.DELETE_MEETUP}_PENDING`:
      return Object.assign({}, state, {
        isFetching: true
      });
    case `${T.DELETE_MEETUP}_FULFILLED`:
      return Object.assign({}, state, {
        isFetching: false,
        data: [
          ...state.data.slice(0, action.id),
          ...state.data.slice(action.id + 1)
        ]
      });
    case `${T.DELETE_MEETUP}_REJECTED`:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default meetups;
