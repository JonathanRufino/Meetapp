import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

function SignIn() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  const SIGN_IN_SCHEMA = Yup.object().shape({
    email: Yup.string()
      .email(t('error.invalid.email'))
      .required(t('error.empty.signEmail')),
    password: Yup.string().required(t('error.empty.signPassword')),
  });

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={SIGN_IN_SCHEMA} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder={t('placeholder.signEmail')}
        />
        <Input
          name="password"
          type="password"
          placeholder={t('placeholder.signPassword')}
        />

        <button type="submit">
          {loading ? t('state.loading') : t('button.signIn')}
        </button>

        <Link to="/register">{t('link.createNewAccount')}</Link>
      </Form>
    </>
  );
}

export default SignIn;
