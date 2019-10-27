import Polyglot from 'node-polyglot';

import pt from '../../translations/pt';
import en from '../../translations/en';

const LANGUAGES = {
  PT: 'pt',
  EN: 'en',
};

export default async (req, res, next) => {
  const locale = req.locale.language;

  req.polyglot = new Polyglot();

  switch (locale) {
    case LANGUAGES.PT:
      req.polyglot.extend(pt);
      break;
    case LANGUAGES.EN:
    default:
      req.polyglot.extend(en);
      break;
  }

  next();
};
