import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

// Import the various reducers here:
import errors from './errors';
import messages from './messages';
import user from './user';
import meetups from './meetups';
import guestsList from './guestsList';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  errors,
  messages,
  user,
  meetups,
  guestsList,
  routing: routerReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
