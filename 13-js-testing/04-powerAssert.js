import assert from 'power-assert';

const indexOf = (items, value, fromIndex = 0) => items.indexOf(value, fromIndex);

assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
assert(indexOf([1, 2, 1, 2], 1) === 0);
assert(indexOf([2, 'one', 'cat', false], 8) === -1);
assert(indexOf([1, 2, 1, 2], 0) === -1);
assert(indexOf([], 9) === -1);
