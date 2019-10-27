import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import i18n from '~/config/i18n';

import {
  createMeetupSuccess,
  createMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
  cancelMeetupSuccess,
  cancelMeetupFailure,
} from './actions';
import MeetupTypes from './types';

export function* createMeetup({ payload }) {
  try {
    yield call(api.post, 'meetups', payload.data);

    toast.success(i18n.t('message.success.meetupCreated'));

    yield put(createMeetupSuccess());
    history.push('/');
  } catch (err) {
    toast.error(err.response.data.error);

    yield put(createMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  const { id, data } = payload;

  try {
    yield call(api.put, `meetups/${id}`, data);

    toast.success(i18n.t('message.success.meetupUpdated'));

    yield put(updateMeetupSuccess());
    history.push('/');
  } catch (err) {
    toast.error(err.response.data.error);

    yield put(updateMeetupFailure());
  }
}

export function* cancelMeetup({ payload }) {
  const { id } = payload;

  try {
    yield call(api.delete, `meetups/${id}`);

    toast.success(i18n.t('message.success.meetupCanceled'));

    yield put(cancelMeetupSuccess());
    history.push('/');
  } catch (err) {
    toast.error(err.response.data.error);

    yield put(cancelMeetupFailure());
  }
}

export default all([
  takeLatest(MeetupTypes.CREATE_MEETUP_REQUEST, createMeetup),
  takeLatest(MeetupTypes.UPDATE_MEETUP_REQUEST, updateMeetup),
  takeLatest(MeetupTypes.CANCEL_MEETUP_REQUEST, cancelMeetup),
]);
