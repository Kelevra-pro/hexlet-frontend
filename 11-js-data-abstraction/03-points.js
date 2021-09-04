point1 = [0, 0];
point2 = [3, 4];

const calculateDistance = (dot1, dot2) => {
  const cathetusX = dot2[0] - dot1[0];
  const cathetusY = dot2[1] - dot1[1];

  return Math.sqrt((cathetusX ** 2) + (cathetusY ** 2));
};

// export default calculateDistance;

calculateDistance(point1, point2); // 5
