import produce from 'immer';

import AuthTypes from '~/store/modules/auth/types';

import MeetupTypes from './types';

const INITIAL_STATE = {
  meetup: null,
  loading: false,
};

function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case AuthTypes.SIGN_OUT: {
        draft.meetup = null;
        break;
      }
      case MeetupTypes.CREATE_MEETUP_REQUEST: {
        draft.loading = true;
        break;
      }
      case MeetupTypes.CREATE_MEETUP_SUCCESS: {
        draft.loading = false;
        break;
      }
      case MeetupTypes.CREATE_MEETUP_FAILURE: {
        draft.loading = false;
        break;
      }
      case MeetupTypes.UPDATE_MEETUP_REQUEST: {
        draft.loading = true;
        break;
      }
      case MeetupTypes.UPDATE_MEETUP_SUCCESS: {
        draft.loading = false;
        break;
      }
      case MeetupTypes.UPDATE_MEETUP_FAILURE: {
        draft.loading = false;
        break;
      }
      case MeetupTypes.CANCEL_MEETUP_REQUEST: {
        draft.loading = true;
        break;
      }
      case MeetupTypes.CANCEL_MEETUP_SUCCESS: {
        draft.loading = false;
        break;
      }
      case MeetupTypes.CANCEL_MEETUP_FAILURE: {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

export default meetup;
