const initalState = {
  // Most apps have the need to show messages and errors.
  // Just add an array or object for each model.
  messages: {
    alertVisible: false,
    user: []
  },
  errors: {
    user: []
  },
  user: {
    auth: {},
    data: {},
    password: {},
    uid: {},
    isLoading: false
  }
};

export default initalState;
