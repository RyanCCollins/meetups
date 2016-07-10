import expect from 'expect';
import * as types from '../../src/constants/guestsList';
import reducer from '../../src/reducers/guestsList';

describe('guestList reducer', () => {
  it('should return an empty array (initial state)', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([]);
  });

  it('should add a guest to the guestList array', () => {
    expect(
      reducer([], {
        type: types.ADD_GUEST,
        guest: 'Ryan'
      })
    ).toEqual(
      [
        'Ryan'
      ]
    );
  });
  it('should remove the guest with the specified index from the guestList array', () => {
    const stateBefore = ['Ryan', 'Bob', 'Ted'];
    const stateAfter = ['Ryan', 'Ted'];
    const index = 1;
    expect(
      reducer(stateBefore, {
        type: types.REMOVE_GUEST,
        index
      })
    ).toEqual(stateAfter);
  });
});
