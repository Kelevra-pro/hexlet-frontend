import _ from 'lodash';

const countWords = (sentence) => {
  const result = {};
  const words = _.words(sentence);
  for (const word of words) {
    const lowerCaseWord = word.toLowerCase();
    result[lowerCaseWord] = (result[lowerCaseWord] ?? 0) + 1;
  }

  return result;
};

// export default countWords;

countWords('');
// {}

const text1 = 'one two three two ONE one wow';
countWords(text1);
// {
//   one: 3,
//   two: 2,
//   three: 1,
//   wow: 1,
// }

const text2 = 'another one sentence with strange Words words';
countWords(text2);
// {
//   another: 1,
//   one: 1,
//   sentence: 1,
//   with: 1,
//   strange: 1,
//   words: 2,
// }
