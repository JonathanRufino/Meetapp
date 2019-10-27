import AuthTypes from './types';

export function signInRequest(email, password) {
  return {
    type: AuthTypes.SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: AuthTypes.SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: AuthTypes.SIGN_FAILURE,
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: AuthTypes.SIGN_UP_REQUEST,
    payload: { name, email, password },
  };
}

export function signUpSuccess() {
  return {
    type: AuthTypes.SIGN_UP_SUCCESS,
  };
}

export function signOut() {
  return {
    type: AuthTypes.SIGN_OUT,
  };
}
