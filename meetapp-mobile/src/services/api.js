import axios from 'axios';

import i18n from '~/i18n';

const api = axios.create({
  baseURL: 'http://0.0.0.0:3333',
});

api.interceptors.request.use(
  config => {
    config.headers['Accept-Language'] = i18n.locale;

    return config;
  },
  err => Promise.reject(err)
);

export default api;
