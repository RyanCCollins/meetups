/* An example of how to use the network request
 * module with redux and redux promise middleware
 * To create your action creators.
 */
import * as T from '../constants/meetups';
import Network from '../utils/network';

const getMeetups = () => ({
  type: T.GET_MEETUPS,
  payload: Network.get({
    resource: 'meetups'
  })
});

const getMeetup = (id) => ({
  type: T.GET_MEETUP,
  payload: Network.get({
    resource: 'meetups',
    id
  })
});

const createMeetup = (data) => ({
  type: T.CREATE_MEETUP,
  payload: {
    promise: Network.post({
      delay: 1000,
      resource: 'meetups',
      body: data
    }),
    data
  }
});

export {
  createMeetup,
  getMeetup,
  getMeetups
};
