/* An example of how to use the network request
 * module with redux and redux promise middleware
 * To create your action creators.
 */
import * as T from '../constants/meetups';
import Network from '../utils/network';

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
