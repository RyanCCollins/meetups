import expect from 'expect';
import * as actions from '../../src/actions/guestsList';
import * as types from '../../src/constants/guestsList';

describe('actions', () => {
  it('should create an action to add a guest to the guest list', () => {
    const guest = 'Ryan';
    const expectedAction = {
      type: types.ADD_GUEST,
      guest
    };
    expect(actions.addGuest(guest)).toEqual(expectedAction);
  });
  it('should create an action to remove a guest from the guest list', () => {
    const index = 1;
    const expectedAction = {
      type: types.REMOVE_GUEST,
      index
    };
    expect(actions.removeGuest(index)).toEqual(expectedAction);
  });
});
