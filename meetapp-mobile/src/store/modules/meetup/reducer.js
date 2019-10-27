import produce from 'immer';

import MeetupTypes from './types';

const INITIAL_STATE = {
  loading: false,
};

function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case MeetupTypes.SUBSCRIBE_REQUEST:
      case MeetupTypes.CANCEL_SUBSCRIPTION_REQUEST: {
        draft.loading = true;
        break;
      }
      case MeetupTypes.SUBSCRIBE_SUCCESS:
      case MeetupTypes.SUBSCRIBE_FAILURE:
      case MeetupTypes.CANCEL_SUBSCRIPTION_SUCCESS:
      case MeetupTypes.CANCEL_SUBSCRIPTION_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

export default meetup;
