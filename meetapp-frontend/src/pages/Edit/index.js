import React, { useMemo } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { MdAdd } from 'react-icons/md';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';
import { updateMeetupRequest } from '~/store/modules/meetup/actions';
import i18n from '~/config/i18n';

import { Container } from './styles';

const MEETUP_SCHEMA = Yup.object().shape({
  banner_id: Yup.number().required(i18n.t('error.empty.meetupBanner')),
  title: Yup.string().required(i18n.t('error.empty.meetupTitle')),
  description: Yup.string().required(i18n.t('error.empty.meetupDescription')),
  location: Yup.string().required(i18n.t('error.empty.meetupLocation')),
  date: Yup.date(i18n.t('error.invalid.date')).required(
    i18n.t('error.empty.meetupDate')
  ),
});

function Edit({ location }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const loading = useSelector(state => state.meetup.loading);

  const meetup = useMemo(
    () => ({
      ...location.state.meetup,
      date: parseISO(location.state.meetup.date),
    }),
    [location.state.meetup]
  );

  function handleSubmit(data) {
    dispatch(updateMeetupRequest(meetup.id, data));
  }

  return (
    <Container>
      <Form schema={MEETUP_SCHEMA} initialData={meetup} onSubmit={handleSubmit}>
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

Edit.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.string,
        banner: PropTypes.shape({
          url: PropTypes.string,
        }),
        date: PropTypes.string,
        dateFormatted: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Edit;
