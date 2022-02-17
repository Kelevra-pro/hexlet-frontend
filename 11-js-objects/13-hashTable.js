import crc32 from 'crc-32';

const getIndex = (value) => {
  const hash = crc32.str(value);

  return Math.abs(hash) % 1000;
};

const hasCollision = (map, key) => {
  const index = getIndex(key);
  const [currentKey] = map[index];
  return currentKey !== key;
};

export const make = () => [];

export const set = (map, key, value) => {
  const index = getIndex(key);
  if (map[index] && hasCollision(map, key)) {
    return false;
  }
  map[index] = [key, value];

  return true;
};

export const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);
  if (!map[index] || hasCollision(map, key)) {
    return defaultValue;
  }
  const [, value] = map[index];

  return value;
};

const map1 = make();
const result1 = get(map1, 'key'); //null
console.log('result1: null', result1);

const result2 = get(map1, 'key', 'value'); //value
console.log('result2: value', result2);

set(map1, 'key2', 'value2');

const result3 = get(map1, 'key2');
console.log('result3: value2', result3);

const result4 = get(map1, 'undefined');
console.log('result4: null', result4);

set(map1, 'key2', 'another value');
const result5 = get(map1, 'key2');
console.log('result5: another value', result5);

const map2 = make();
set(map2, 'aaaaa0.462031558722291', 'vvv'); //true
set(map2, 'aaaaa0.0585754039730588', 'boom!'); //false

const result6 = get(map2, 'aaaaa0.462031558722291');
console.log('result6: vvv', result6);

const result7 = get(map2, 'aaaaa0.0585754039730588');
console.log('result7: null', result7);

set(map2, 'aaaaa0.462031558722291', 'wop');
const result8 = get(map2, 'aaaaa0.462031558722291');
console.log('result8: wop', result8);
