import _ from 'lodash';

const countByChars = (str) => {
  const chars = {};

  for (const char of str) {
    const count = _.get(chars, char, 0);
    chars[char] = count + 1;
  }

  return chars;
};

const scrabble = (str, word) => {
  const countsChars = countByChars(str);

  for (const char of word.toLowerCase()) {
    const count = _.get(countsChars, char, 0);
    if (count === 0) {
      return false;
    }
    countsChars[char] -= 1;
  }

  return true;
};

// export default scrabble;

scrabble('rkqodlw', 'world'); // true
scrabble('avj', 'java'); // false
scrabble('avjafff', 'java'); // true
scrabble('', 'hexlet'); // false
scrabble('scriptingjava', 'JavaScript'); // true

scrabble('rkqodlw', 'world'); //true
scrabble('begsdhhtsexoult', 'hexlet'); //true
scrabble('katas', 'steak'); //false
scrabble('nastenka', 'steak'); //true
scrabble('scriptjava', 'javascript'); //true
scrabble('javaSprint', 'javascript'); //false
scrabble('scriptjavest', 'javascript'); //false
scrabble('', 'javascript'); //false
scrabble('scriptingjava', 'JavaScript'); //true
