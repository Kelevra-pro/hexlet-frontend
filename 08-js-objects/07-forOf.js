import _ from 'lodash';

const pick = (data, keys) => {
  const result = {};

  for (const key of keys) {
    if (_.has(data, key)) {
      result[key] = data[key];
    }
  }

  return result;
};

// export default pick;

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

pick(data, ['user']); // { user: 'ubuntu' }
pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
pick(data, []); // {}
pick(data, ['none', 'cores']); // { cores: 4 }
