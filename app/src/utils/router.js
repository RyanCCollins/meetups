import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store/store';
import App from '../components/App';
import * as Pages from '../pages/';
import ReduxToastr from 'react-redux-toastr';

const router = (
  <Provider store={store}>
    <div>
      <ReduxToastr
        timeOut={4000}
        newestOnTop
        position="top-right"
      />
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Pages.LandingPage} />
          <Route path="/signup" name="signup" component={Pages.SignupPage} />
          <Route path="/signin" name="signin" component={Pages.LoginPage} />
          <Route path="/meetups" name="MeetupsView" component={Pages.MeetupPage} />
          <Route path="/meetups/new" name="addMeetup" component={Pages.AddMeetupPage} />
          <Route path="*" component={Pages.NotFoundPage} />
        </Route>
      </Router>
    </div>
  </Provider>
);

export default router;
