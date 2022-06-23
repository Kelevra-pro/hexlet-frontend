const sumIntervals = (intervals) => {
  const sequence = [];

  for (const [start, end] of intervals) {
    for (let i = start; i < end; i += 1) {
      if (!sequence.includes(i)) {
        sequence.push(i);
      }
    }
  }

  return sequence.length;
};

sumIntervals([
  [5, 5],
]); // 0

sumIntervals([
  [-100, 0],
]); // 100

sumIntervals([
  [1, 2],
  [11, 12],
]); // 2

sumIntervals([
  [2, 7],
  [6, 6],
]); // 5

sumIntervals([
  [1, 9],
  [7, 12],
  [3, 4],
]); // 11

sumIntervals([
  [1, 5],
  [-30, 19],
  [1, 7],
  [16, 19],
  [5, 100],
]); // 130
