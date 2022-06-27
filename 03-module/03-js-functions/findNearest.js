const findIndexOfNearest = (arr, goal) => {
  if (!arr.length) {
    return null;
  }

  const closest = arr
    .reduce((prev, curr) => (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev));

  return arr.findIndex((num) => num === closest);
};

findIndexOfNearest([], 2);              // null
findIndexOfNearest([15, 10, 3, 4], 0);  // 2
findIndexOfNearest([7, 5, 3, 2], 4);    // 1
findIndexOfNearest([7, 5, 4, 4, 3], 4); // 2
