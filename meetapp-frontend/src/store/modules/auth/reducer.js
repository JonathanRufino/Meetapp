import produce from 'immer';

import AuthTypes from './types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case AuthTypes.SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }
      case AuthTypes.SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case AuthTypes.SIGN_FAILURE: {
        draft.loading = false;
        break;
      }
      case AuthTypes.SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}

export default auth;
