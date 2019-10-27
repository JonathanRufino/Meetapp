import MeetupTypes from './types';

export function subscribeRequest(id) {
  return {
    type: MeetupTypes.SUBSCRIBE_REQUEST,
    payload: { id },
  };
}

export function subscribeSuccess() {
  return {
    type: MeetupTypes.SUBSCRIBE_SUCCESS,
  };
}

export function subscribeFailure() {
  return {
    type: MeetupTypes.SUBSCRIBE_FAILURE,
  };
}

export function cancelSubscriptionRequest(id) {
  return {
    type: MeetupTypes.CANCEL_SUBSCRIPTION_REQUEST,
    payload: { id },
  };
}

export function cancelSubscriptionSuccess() {
  return {
    type: MeetupTypes.CANCEL_SUBSCRIPTION_SUCCESS,
  };
}

export function cancelSubscriptionFailure() {
  return {
    type: MeetupTypes.CANCEL_SUBSCRIPTION_FAILURE,
  };
}
