import getFunction from './06-matchers';

const gt = getFunction();

test('gt', () => {
  expect(gt(3, 1)).toBeTruthy();
  expect(gt(3, 3)).toBeFalsy();
  expect(gt(1, 3)).toBeFalsy();
});
