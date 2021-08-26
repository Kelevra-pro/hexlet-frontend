import without from '../09-js-testing/05-jest';

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([])).toEqual([]);
});
