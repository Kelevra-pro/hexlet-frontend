import { strict as assert } from 'assert';

const take = (items, n = 1) => items.slice(0, n);

assert.deepEqual(take([], 2), []);
assert.deepEqual(take([1, 2, 3]), [1]);
assert.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.deepEqual(take([4, 3], 9), [4, 3]);
