import _ from 'lodash';
import makeValidator from './07-unitTests.js';

test('makeValidator', () => {
  const validator = makeValidator();

  expect(validator.isValid('some value')).toBe(true);
  expect(validator.isValid()).toBe(true);

  validator.addCheck(_.isNumber);
  expect(validator.isValid('some value')).toBe(false);

  validator.addCheck((v) => v > 10);
  expect(validator.isValid(11)).toBe(true);

  validator.addCheck((v) => v % 2 === 0);
  expect(validator.isValid(11)).toBe(false);
  expect(validator.isValid(12)).toBe(true);
  expect(validator.isValid(8)).toBe(false);
});
