import _ from 'lodash';

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

const fill = (object, keys, data) => {
  const pickData = keys.length ? _.pick(data, keys) : data;
  Object.assign(object, pickData);
};

// export default fill;

fill(company, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

// fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }
