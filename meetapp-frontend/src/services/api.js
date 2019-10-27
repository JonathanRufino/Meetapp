import axios from 'axios';

import i18n from '~/config/i18n';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(
  config => {
    config.headers['Accept-Language'] = i18n.language;

    return config;
  },
  err => Promise.reject(err)
);

export default api;
