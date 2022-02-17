import _ from 'lodash';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

const cloneDeep = (data) => {
  const result = {};
  const entries = Object.entries(data);
  for (const [key, value] of entries) {
    result[key] = _.isObject(value) ? cloneDeep(value) : value;
  }

  return result;
};

// export default cloneDeep;

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

// Но внутри другие объекты
// result.key2 !== data.key2; // true
// result.key2.innerKey !== data.key2.innerKey; // true

console.log('result.key2 !== data.key2', result.key2 !== data.key2);
console.log('result.key2.innerKey !== data.key2.innerKey',
  result.key2.innerKey !== data.key2.innerKey);
