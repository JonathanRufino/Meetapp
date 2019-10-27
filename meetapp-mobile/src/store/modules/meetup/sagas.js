import { Alert } from 'react-native';
import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import i18n from '~/i18n';

import {
  subscribeSuccess,
  subscribeFailure,
  cancelSubscriptionSuccess,
  cancelSubscriptionFailure,
} from './actions';
import MeetupTypes from './types';

export function* subscribe({ payload }) {
  try {
    yield call(api.post, `meetups/${payload.id}/subscriptions`);

    Alert.alert(
      i18n.t('success.subscribe.title'),
      i18n.t('success.subscribe.description')
    );

    yield put(subscribeSuccess());
  } catch (err) {
    Alert.alert(i18n.t('error.subscription'), err.response.data.error);

    yield put(subscribeFailure());
  }
}

export function* cancelSubscription({ payload }) {
  const { id, data } = payload;

  try {
    yield call(api.put, `meetups/${id}`, data);

    Alert.alert(
      i18n.t('success.cancelSubscription.title'),
      i18n.t('success.cancelSubscription.description')
    );

    yield put(cancelSubscriptionSuccess());
  } catch (err) {
    Alert.alert(i18n.t('error.cancelSubscription'), err.response.data.error);

    yield put(cancelSubscriptionFailure());
  }
}

export default all([
  takeLatest(MeetupTypes.SUBSCRIBE_REQUEST, subscribe),
  takeLatest(MeetupTypes.CANCEL_SUBSCRIPTION_REQUEST, cancelSubscription),
]);
