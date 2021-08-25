import getFunction from './05-jest';

const without = getFunction();

test('without', () => {
  expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(without([])).toEqual([]);
});
