import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { MdAdd } from 'react-icons/md';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';
import { createMeetupRequest } from '~/store/modules/meetup/actions';

import { Container } from './styles';

export default function New() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const loading = useSelector(state => state.meetup.loading);

  const MEETUP_SCHEMA = Yup.object().shape({
    banner_id: Yup.number().required(t('error.empty.meetupBanner')),
    title: Yup.string().required(t('error.empty.meetupTitle')),
    description: Yup.string().required(t('error.empty.meetupDescription')),
    location: Yup.string().required(t('error.empty.meetupLocation')),
    date: Yup.date(t('error.invalid.date')).required(
      t('error.empty.meetupDate')
    ),
  });

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form schema={MEETUP_SCHEMA} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder={t('placeholder.meetupTitle')} />
        <Input
          name="description"
          placeholder={t('placeholder.meetupDescription')}
          multiline
          rows="4"
        />
        <DatePicker name="date" placeholder={t('placeholder.meetupDate')} />
        <Input
          name="location"
          type=""
          placeholder={t('placeholder.meetupLocation')}
        />

        <button type="submit">
          <MdAdd size={24} color="#fff" />
          {loading ? t('state.saving') : t('button.saveMeetup')}
        </button>
      </Form>
    </Container>
  );
}
