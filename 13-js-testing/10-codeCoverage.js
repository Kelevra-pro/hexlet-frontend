import _ from 'lodash';

export const get = (arr, index, defaultValue) => {
  if (index >= arr.length || index < 0) {
    if (_.isNil(defaultValue)) {
      return null;
    }
    return defaultValue;
  }
  return arr[index];
};

export const indexOf = (coll, value, fromIndex = 0) => {
  const collLength = coll.length;

  if (collLength === 0) {
    return -1;
  }
  let index = fromIndex;

  if (index < 0) {
    if (-index > collLength) {
      index = 0;
    } else {
      index += collLength;
    }
  }

  return coll.indexOf(value, index);
};

export const slice = (coll, start = 0, end = coll.length) => {
  const collLength = coll.length;
  if (collLength === 0) {
    return [];
  }
  let normalizedStart = start;

  if (normalizedStart < 0) {
    if (-normalizedStart > collLength) {
      normalizedStart = 0;
    } else {
      normalizedStart += collLength;
    }
  }

  return coll.slice(normalizedStart, end);
};
