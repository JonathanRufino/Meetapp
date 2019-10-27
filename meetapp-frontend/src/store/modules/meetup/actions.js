import MeetupTypes from './types';

export function createMeetupRequest(data) {
  return {
    type: MeetupTypes.CREATE_MEETUP_REQUEST,
    payload: { data },
  };
}

export function createMeetupSuccess() {
  return {
    type: MeetupTypes.CREATE_MEETUP_SUCCESS,
  };
}

export function createMeetupFailure() {
  return {
    type: MeetupTypes.CREATE_MEETUP_FAILURE,
  };
}

export function updateMeetupRequest(id, data) {
  return {
    type: MeetupTypes.UPDATE_MEETUP_REQUEST,
    payload: { id, data },
  };
}

export function updateMeetupSuccess() {
  return {
    type: MeetupTypes.UPDATE_MEETUP_SUCCESS,
  };
}

export function updateMeetupFailure() {
  return {
    type: MeetupTypes.UPDATE_MEETUP_FAILURE,
  };
}

export function cancelMeetupRequest(id) {
  return {
    type: MeetupTypes.CANCEL_MEETUP_REQUEST,
    payload: { id },
  };
}

export function cancelMeetupSuccess() {
  return {
    type: MeetupTypes.CANCEL_MEETUP_SUCCESS,
  };
}

export function cancelMeetupFailure() {
  return {
    type: MeetupTypes.CANCEL_MEETUP_FAILURE,
  };
}
