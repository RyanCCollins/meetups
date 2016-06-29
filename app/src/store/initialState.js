const initalState = {
  // Most apps have the need to show messages and errors.
  // Just add an array or object for each model.
  meetups: [],
  messages: {
    alertVisible: false,
    user: [],
    meetups: []
  },
  errors: {
    user: [],
    login: [],
    signup: [],
    meetups: []
  },
  user: {
    errors: [],
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
