const returnMovie = require('../client/components/addMovie.js');

test('returns movie', () => {
  expect(returnMovie('movie')).toBe('movie');
});

test('returns movie', () => {
  expect(returnMovie('cat')).toBe('movie');
});