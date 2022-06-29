const filterAnagrams = (word, words) => {
  const normalize = (str) => str.split('').sort().join();
  const normalizedTarget = normalize(word);

  return words.filter((item) => normalize(item) === normalizedTarget);
};

export default filterAnagrams;

filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// ['aabb', 'bbaa']

filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// ['carer', 'racer']

filterAnagrams('laser', ['lazing', 'lazy', 'lacer']);
// []