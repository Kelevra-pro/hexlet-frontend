// makeSegment(). Принимает на вход две точки и возвращает отрезок.
// getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
// getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
// getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.

const makeDecartPoint = (x, y) => {
  return { x, y };
};

const getX = (point) => point.x;

const getY = (point) => point.y;

export const makeSegment = (point1, point2) => {
  const segment = { beginPoint: point1, endPoint: point2 };

  return segment;
};

export const getBeginPoint = (segment) => segment.beginPoint;

export const getEndPoint = (segment) => segment.endPoint;

export const getMidpointOfSegment = (segment) => {
  const beginPoint = getBeginPoint(segment);
  const endPoint = getEndPoint(segment);

  const x = (getX(beginPoint) + getX(endPoint)) / 2;
  const y = (getY(beginPoint) + getY(endPoint)) / 2;

  return makeDecartPoint(x, y);
};

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
const segment = makeSegment(beginPoint, endPoint);

getMidpointOfSegment(segment); // (1.5, 1)
getBeginPoint(segment); // (3, 2)
getEndPoint(segment); // (0, 0)
