import _ from 'lodash';
import set from './08-setup';

// const object = { a: [{ b: { c: 3 } }] };
//
// beforeAll(() => {
//   set(object, 'a[0].b.c', 4);
//   set(object, ['x', '0', 'y', 'z'], 5);
// });
//
// test('set1', () => {
//   expect(object.a[0].b.c).toBe(4);
//   expect(object.x[0].y.z).toBe(5);
//   expect(object.key).not.toBe('value');
// });

let data;
let dataCopy;

beforeEach(() => {
  data = {
    a: [
      {
        b: {
          c: 3,
        },
      },
    ],
  };
  dataCopy = _.cloneDeep(data);
});

test('plain set', () => {
  set(data, 'a', 'value');
  dataCopy.a = 'value';
  expect(data).toEqual(dataCopy);
});

test('nested set', () => {
  set(data, 'a[0].b.c', true);
  dataCopy.a[0].b.c = true;
  expect(data).toEqual(dataCopy);
});

test('set new property', () => {
  set(data, 'a[0].b.d', false);
  dataCopy.a[0].b.d = false;
  expect(data).toEqual(dataCopy);
});
