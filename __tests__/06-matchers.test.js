import gt from '../09-js-testing/06-matchers';

test('gt', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(3, 3)).toBeFalsy();
  expect(gt(1, 3)).toBeFalsy();
});