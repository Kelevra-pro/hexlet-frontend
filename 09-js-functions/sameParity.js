const isEven = (number) => number % 2 === 0;

const sameParity = (numbers) => {
  const firstItemParity = isEven(numbers[0]);

  return numbers.filter((num) => isEven(num) === firstItemParity);
};

// export default sameParity;

sameParity([-1, 0, 1, -3, 10, -2]); // [-1, 1, -3]
sameParity([2, 0, 1, -3, 10, -2]); // [2, 0, 10, -2]
sameParity([]); // []
