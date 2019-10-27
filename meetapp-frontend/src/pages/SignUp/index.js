import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

function SignUp() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const SIGN_UP_SCHEMA = Yup.object().shape({
    name: Yup.string().required(t('error.empty.signName')),
    email: Yup.string()
      .email(t('error.invalid.email'))
      .required(t('error.empty.signEmail')),
    password: Yup.string()
      .min(6, t('error.length.password.min'))
      .required(t('error.empty.signPassword')),
  });

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={SIGN_UP_SCHEMA} onSubmit={handleSubmit}>
        <Input name="name" placeholder={t('placeholder.signName')} />
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

        <button type="submit">{t('button.createAccount')}</button>

        <Link to="/">{t('link.hasAccount')}</Link>
      </Form>
    </>
  );
}

export default SignUp;
