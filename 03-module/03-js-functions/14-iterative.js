const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }

    return iter(acc + 1);
  };

  return iter(2);
};

// console.log(smallestDivisor(15)); // 3
// console.log(smallestDivisor(17)); // 17
