const returnCat = require('../client/components/addCat.js');

test('returns cat', () => {
  expect(returnCat('cat')).toBe('cat');
});

test('returns cat', () => {
  expect(returnCat('dog')).toBe('cat');
});