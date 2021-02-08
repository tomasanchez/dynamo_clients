import { getUrl as getUrlProvider } from '../URLProvider';

const URLs = {
  BASEURL: '/dynamo',
  HOME: '/',
  MASTER: '/clients',
  DETAIL: '/clients/detail/:id',
  NOT_FOUND: '/notFound',
  BUGGY: '/buggy',
  ANY: '/*',
};

export const getUrl = (key, replaceOptions) => {
  return getUrlProvider(URLs, key, replaceOptions);
};
