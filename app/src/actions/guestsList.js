import * as T from '../constants/guestsList';

export const addGuest = (guest) => ({
  type: T.ADD_GUEST,
  guest
});

export const removeGuest = (index) => ({
  type: T.REMOVE_GUEST,
  index
});
