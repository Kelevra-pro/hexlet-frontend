import _ from 'lodash';

const genDiff = (obj1, obj2) => {
  const result = {};
  const keys1 = _.keys(obj1);
  const keys2 = _.keys(obj2);
  const keys = _.union(keys1, keys2);

  for (const key of keys) {
    if (!_.has(obj1, key)) {
      result[key] = 'added';
    } else if (!_.has(obj2, key)) {
      result[key] = 'deleted';
    } else if (obj1[key] !== obj2[key]) {
      result[key] = 'changed';
    } else {
      result[key] = 'unchanged';
    }
  }

  return result;
};

// export default genDiff;

genDiff(
  { one: 'eon', two: 'two', four: true },
  { two: 'own', zero: 4, four: true },
);
// {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }

// genDiff({ one: 'eon', two: 'two' }, { two: 'own', one: 'one' });
// {
//   one: 'changed',
//   two: 'changed',
// }

// genDiff({ unchanged: 'item' }, { unchanged: 'item' });
// {
//   unchanged: 'unchanged'
// }
