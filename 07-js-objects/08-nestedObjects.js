const data = {
  user: 'ubuntu',
  hosts: {
    0: {
      name: 'web1',
    },
    1: {
      name: 'web2',
      null: 3,
      active: false,
    },
  },
};

const get = (data, keys) => {
  let result = data;
  for (const key of keys) {
    const hasChainProperty = Object.prototype.hasOwnProperty.call(result, key);
    if (!hasChainProperty) {
      return null;
    }
    result = result[key];
  }

  return result;
};

// export default get;

get(data, ['undefined']); // null
get(data, ['user']); // 'ubuntu'
get(data, ['user', 'ubuntu']); // null
get(data, ['hosts', 1, 'name']); // 'web2'
get(data, ['hosts', 0]); // { name: 'web1' }
get(data, ['hosts', 1, null]); // 3
get(data, ['hosts', 1, 'active']); // false
