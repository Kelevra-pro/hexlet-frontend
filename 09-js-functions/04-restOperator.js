import _ from 'lodash';

const average = (...nums) => {
  const numsSize = nums.length;

  if (numsSize === 0) {
    return null;
  }

  return _.sum(nums) / numsSize;
};

// export default average;

average(0); // 0
average(0, 10); // 5
average(-3, 4, 2, 10); // 3.25
average(); // null