/* An example of how to use the network request
 * module with redux and redux promise middleware
 * To create your action creators.
 */
import * as T from '../constants/meetups';
import { Network } from '../utils/network';

export const getMeetups = () => ({
  type: T.GET_MEETUPS,
  payload: Network.getAll('meetups')
});

export const getMeetup = (id) => ({
  type: T.GET_MEETUP,
  payload: Network.getOne('meetups', id)
});

export const createMeetup = (data) => ({
  type: T.CREATE_MEETUP,
  payload: {
    promise: Network.post('meetups', data)
  }
});

export const deleteMeetup = (id) => ({
  type: T.DELETE_MEETUP,
  payload: {
    promise: Network.delete('meetups', id)
  }
});

export const updateMeetup = (id, data) => ({
  type: T.UPDATE_MEETUP,
  payload: {
    promise: Network.update('meetups', id, data)
  }
});

/* Temporary data before submitting to api */
export const addLocation = (location) => ({
  type: T.ADD_LOCATION,
  location
});

export const removeLocation = () => ({
  type: T.REMOVE_LOCATION
});
