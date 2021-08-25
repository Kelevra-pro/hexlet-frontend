// Идея функции взята из lodash
// https://lodash.com/docs#get
get({ hello: 'world' }, 'hello'); // world
get({ hello: 'world' }, 'hello', 'kitty'); // 'world'
get({}, 'hello', 'kitty'); // 'kitty'

if (get({ hello: 'world' }, 'hello') !== 'world') {
  throw new Error('Error');
}

if (get({}, 'hello', 'kitty') !== 'kitty') {
  throw new Error('Error');
}

if (get({ hello: 'world' }, 'hello', 'kitty') !== 'world') {
  throw new Error('Error');
}
