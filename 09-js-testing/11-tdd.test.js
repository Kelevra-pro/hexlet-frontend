import fill from './11-tdd';

let coll;

beforeEach(() => {
  coll = [1, 2, 3, 4];
});

test('fill1', () => {
  expect(fill(coll, '*', 1, 3)).toEqual([1, '*', '*', 4]);
});

test('fill2', () => {
  expect(fill(coll, '*')).toEqual(['*', '*', '*', '*']);
});

test('fill3', () => {
  expect(fill(coll, '*', 4)).toEqual([1, 2, 3, 4]);
});

test('fill4', () => {
  expect(fill(coll, '*', 0, 10)).toEqual(['*', '*', '*', '*']);
});
