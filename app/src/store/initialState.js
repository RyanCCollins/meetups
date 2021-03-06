const initalState = {
  // Most apps have the need to show messages and errors.
  // Just add an array or object for each model.
  meetups: {
    isFetching: false,
    data: [],
    selectedMeetup: {},
    errors: null
  },
  guestsList: [],
  messages: {
    alertVisible: false,
    user: [],
    meetups: []
  },
  errors: [],
  user: {
    credentials: {},
    authToken: null,
    isAuthenticated: false,
    isFetching: false,
    signupData: {},
    profileData: {
      fullname: null,
      email: null
    }
  }
};

export default initalState;
