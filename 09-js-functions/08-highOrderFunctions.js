import _ from 'lodash';

const users = [
  { name: 'Tirion', birthday: 'Nov 19, 1988' },
  { name: 'Sam', birthday: 'Nov 22, 1999' },
  { name: 'Rob', birthday: 'Jan 11, 1975' },
  { name: 'Sansa', birthday: 'Mar 20, 2001' },
  { name: 'Tisha', birthday: 'Feb 27, 1992' },
  { name: 'Chris', birthday: 'Dec 25, 1995' },
];

const takeOldest = (users, count = 1) => {
  const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));

  return sorted.slice(0, count);
};

// export default takeOldest;

takeOldest(users);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
// ];

takeOldest(users, 2);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
//   { name: 'Tirion', birthday: 'Nov 19, 1988' },
// ]

takeOldest(users, 5);
// [
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
//   { name: 'Tirion', birthday: 'Nov 19, 1988' },
//   { name: 'Tisha', birthday: 'Feb 27, 1992' },
//   { name: 'Chris', birthday: 'Dec 25, 1995' },
//   { name: 'Sam', birthday: 'Nov 22, 1999' },
// ]