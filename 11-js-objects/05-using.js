const getDomainInfo = (url) => {
  const scheme = url.startsWith('https') ? 'https' : 'http';
  const name = url.replace(`${scheme}://`, '');

  return { scheme, name };
};

// export default getDomainInfo;

// Если домен передан без указания протокола,
// то по умолчанию берется http
getDomainInfo('yandex.ru');
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

getDomainInfo('https://hexlet.io');
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }

getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// }
