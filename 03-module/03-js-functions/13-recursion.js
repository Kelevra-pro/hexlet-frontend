const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin;
  }

  return begin + sequenceSum(begin + 1, end);
  // END
};

export default sequenceSum;

// console.log(sequenceSum(1, 5));
// console.log(sequenceSum(4, 10));
