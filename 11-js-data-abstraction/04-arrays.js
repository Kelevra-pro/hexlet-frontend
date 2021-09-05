const point1 = { x: 0, y: 0 };
const point2 = { x: 4, y: 4 };

const getMidpoint = (point1, point2) => {
  const midPointX = (point1.x + point2.x) / 2;
  const midPointY = (point1.y + point2.y) / 2;

  return { x: midPointX, y: midPointY };
};

// export default getMidpoint;

getMidpoint(point1, point2); // { x: 2, y: 2 };
