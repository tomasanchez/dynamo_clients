import '@testing-library/jest-dom/extend-expect';

import { getUrl } from './BrowserProvider';

describe('BrowserProvider.js Test Suite', () => {
  test('should return URL when passed correct key', () => {
    const key = 'HOME';

    const output = getUrl(key);

    expect(output).toEqual('/');
  });

  test('should throw error when passed wrong key', () => {
    const key = 'DOES_NOT_EXIST';
    const errorMessage = 'Url defined: ' + key + ' not found';

    const urlGet = () => getUrl(key);

    expect(urlGet).toThrowError(errorMessage);
  });

  test('should correctly replace key when passed correct replaceValue', () => {
    const key = 'DETAIL';

    const output = getUrl(key, [{ value: 1 }]);

    expect(output).toEqual('/clients/detail/1');
  });
});
