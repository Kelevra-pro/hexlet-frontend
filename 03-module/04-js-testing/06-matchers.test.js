import gt from './06-matchers.js';

test('gt', () => {
  expect(gt(3, 1)).toBe(true);
  expect(gt(3, 3)).toBe(false);
  expect(gt(1, 3)).toBe(false);
});
