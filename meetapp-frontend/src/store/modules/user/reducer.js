import produce from 'immer';

import AuthTypes from '~/store/modules/auth/types';

import UserTypes from './types';

const INITIAL_STATE = {
  profile: null,
};

function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case AuthTypes.SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }
      case UserTypes.UPDATE_PROFILE_SUCCESS: {
        draft.profile = action.payload.profile;
        break;
      }
      case AuthTypes.SIGN_OUT: {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}

export default user;
