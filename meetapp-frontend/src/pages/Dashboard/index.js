import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight, MdAdd } from 'react-icons/md';

import api from '~/services/api';

import { Container, Meetup, PageControl, Loading } from './styles';

function Dashboard() {
  const { t } = useTranslation();

  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing', {
        params: { page },
      });

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(parseISO(meetup.date), "d 'de' MMMM', às' H'h'", {
          locale: pt,
        }),
      }));

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, [page]);

  function handlePrevPage() {
    setPage(page - 1);
  }

  function handleNextPage() {
    setPage(page + 1);
  }

  return (
    <Container>
      <header>
        <h1>{t('header.myMeetups')}</h1>

        <Link to="/meetup/new">
          <button type="button">
            <MdAdd size={24} color="#fff" /> {t('button.newMeetup')}
          </button>
        </Link>
      </header>

      {loading ? (
        <Loading>
          <FaSpinner size={40} color="#f94d6a" />
        </Loading>
      ) : (
        <>
          <ul>
            {meetups.map(meetup => (
              <Link
                key={meetup.id}
                to={{
                  pathname: `/meetup/${meetup.id}`,
                  state: { meetup },
                }}
              >
                <Meetup>
                  <strong>{meetup.title}</strong>
                  <div>
                    <span>{meetup.dateFormatted}</span>
                    <MdChevronRight size={24} color="#fff" />
                  </div>
                </Meetup>
              </Link>
            ))}
          </ul>

          <PageControl>
            <button
              type="button"
              disabled={page === 1}
              onClick={handlePrevPage}
            >
              <MdChevronLeft size={24} /> {t('button.previous')}
            </button>
            <span>{page}</span>
            <button
              type="button"
              disabled={meetups.length < 10}
              onClick={handleNextPage}
            >
              {t('button.next')} <MdChevronRight size={24} />
            </button>
          </PageControl>
        </>
      )}
    </Container>
  );
}

export default Dashboard;
