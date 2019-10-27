import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

function Profile() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  const PROFILE_SCHEMA = Yup.object().shape({
    name: Yup.string().required(t('error.empty.userName')),
    email: Yup.string()
      .email(t('error.invalid.email'))
      .required(t('error.empty.email')),
    oldPassword: Yup.string(),
    password: Yup.string().when('oldPassword', (oldPassword, field) =>
      oldPassword
        ? field
            .required(t('error.empty.newPassword'))
            .min(6, t('error.length.password.min'))
        : field
    ),
    confirmPassword: Yup.string().when('password', (password, field) =>
      password
        ? field
            .required(t('error.empty.confirmPassword'))
            .oneOf([Yup.ref('password')], t('error.invalid.passwordDontMatch'))
        : field
    ),
  });

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form
        schema={PROFILE_SCHEMA}
        initialData={profile}
        onSubmit={handleSubmit}
      >
        <Input name="name" placeholder={t('placeholder.userName')} />
        <Input name="email" type="email" placeholder={t('placeholder.email')} />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder={t('placeholder.password')}
        />
        <Input
          name="password"
          type="password"
          placeholder={t('placeholder.newPassword')}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder={t('placeholder.confirmPassword')}
        />

        <button type="submit">{t('button.saveProfile')}</button>
      </Form>
    </Container>
  );
}

export default Profile;
