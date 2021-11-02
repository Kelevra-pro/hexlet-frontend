class Url {
  constructor(address) {
    this.url = new URL(address);
    this.url.scheme = this.url.protocol.slice(0, -1);
    this.url.queryParams = Object.fromEntries(this.url.searchParams);
  }

  getScheme() {
    return this.url.scheme;
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    return this.url.queryParams;
  }

  getQueryParam(key, defaultValue = null) {
    return this.url.searchParams.has(key) ? this.url.searchParams.get(key) : defaultValue;
  }

  toString() {
    return this.url.toString();
  }

  equals(url) {
    return this.toString() === url.toString();
  }
}


const url = new Url('http://yandex.ru:80?key=value&key2=value2');
url.getScheme(); // 'http'
console.log('http', url.getScheme());

url.getHostName(); // 'yandex.ru'
console.log('yandex.ru', url.getHostName());

url.getQueryParams();
// {
//   key: 'value',
//   key2: 'value2',
// };
console.log(
  `{
    key: 'value',
    key2: 'value2',
    };`,
  url.getQueryParams());

url.getQueryParam('key'); // 'value'
console.log('value', url.getQueryParam('key'));

// второй параметр - значение по умолчанию
url.getQueryParam('key2', 'lala'); // 'value2'
console.log('value2', url.getQueryParam('key2', 'lala'));

url.getQueryParam('new', 'ehu'); // 'ehu'
console.log('ehu', url.getQueryParam('new', 'ehu'));

url.getQueryParam('new'); // null
console.log('null', url.getQueryParam('new'));

url.equals(new Url('http://yandex.ru:80?key=value&key2=value2')); // true
console.log('true', url.equals(new Url('http://yandex.ru:80?key=value&key2=value2')));

url.equals(new Url('http://yandex.ru:80?key=value')); // false
console.log('false', url.equals(new Url('http://yandex.ru:80?key=value')));