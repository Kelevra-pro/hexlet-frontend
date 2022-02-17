const multiply = (matrixA, matrixB) => {
  const result = [];
  const rowsSizeA = matrixA.length;
  const rowsSizeB = matrixB.length;
  const [firstRowB] = matrixB;
  const columnsSizeB = firstRowB.length;

  for (let row = 0; row < rowsSizeA; row += 1) {
    result[row] = [];
    for (let column = 0; column < columnsSizeB; column += 1) {
      let tempResult = 0;
      for (let i = 0; i < rowsSizeB; i += 1) {
        tempResult += matrixA[row][i] * matrixB[i][column];
      }
      result[row][column] = tempResult;
    }
  }

  return result;
};

const matrixA = [[1, 2], [3, 2]];
const matrixB = [[3, 2], [1, 1]];

multiply(matrixA, matrixB);
// [[5, 4], [11, 8]]

const matrixC = [
  [2, 5],
  [6, 7],
  [1, 8],
];
const matrixD = [
  [1, 2, 1],
  [0, 1, 0],
];

multiply(matrixC, matrixD);
// [
//   [2, 9, 2],
//   [6, 19, 6],
//   [1, 10, 1],
// ]
