import get from 'lodash/get';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];
const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

const getFreeDomainsCount = (emails) => emails
.map((email) => {
  const [, domain] = email.split('@');

  return domain;
})
.filter((domain) => freeEmailDomains.includes(domain))
.reduce((acc, domain) => {
  const count = get(acc, domain, 0) + 1;

  return { ...acc, [domain]: count };
}, {});

// export default getFreeDomainsCount;

getFreeDomainsCount(emails);
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
