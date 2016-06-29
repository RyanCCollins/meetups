import * as T from '../constants/messages';

const displayMessage = (message) => ({
  type: T.DISPLAY_MESSAGE,
  messages: [message]
});

const displayMessages = (messages) => ({
  type: T.DISPLAY_MESSAGE,
  messages
});

const dismissMessage = (message) => ({
  type: T.DISMISS_MESSAGE,
  message
});

export {
  displayMessage,
  displayMessages,
  dismissMessage
};
