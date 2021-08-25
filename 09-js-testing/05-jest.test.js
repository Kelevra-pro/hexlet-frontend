import _ from 'lodash';

test('without', () => {
  expect(_.without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  expect(_.without([])).toEqual([]);
});
