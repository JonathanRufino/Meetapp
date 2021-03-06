import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import i18n from '~/config/i18n';

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

    toast.success(i18n.t('message.success.profileUpdated'));

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error(err.response.data.error);

    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(UserTypes.UPDATE_PROFILE_REQUEST, updateProfile),
]);
