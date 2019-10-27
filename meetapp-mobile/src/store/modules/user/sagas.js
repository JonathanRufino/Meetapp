import { Alert } from 'react-native';
import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import i18n from '~/i18n';

import { updateProfileSuccess, updateProfileFailure } from './actions';
import UserTypes from './types';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    Alert.alert(
      i18n.t('success.updateProfile.title'),
      i18n.t('success.updateProfile.description')
    );

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(i18n.t('error.updateProfile'), err.response.data.error);

    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(UserTypes.UPDATE_PROFILE_REQUEST, updateProfile),
]);
